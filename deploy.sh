#!/bin/bash

# Packsi Landing Deployment Script
# This script should be placed on the server at /var/www/scripts/deploy.sh

set -e  # Exit on any error

# Configuration
DEPLOY_DIR="/var/www/landing"
BACKUP_DIR="/var/www/backups"
NGINX_CONFIG="/etc/nginx/sites-available/packsi.net"
DOMAIN="packsi.net"
LOG_FILE="/var/log/packsi-deploy.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a $LOG_FILE
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a $LOG_FILE
}

warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a $LOG_FILE
}

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    sudo mkdir -p $DEPLOY_DIR
    sudo mkdir -p $BACKUP_DIR
    sudo mkdir -p /var/log
}

# Backup current deployment
backup_current() {
    if [ -d "$DEPLOY_DIR" ] && [ "$(ls -A $DEPLOY_DIR)" ]; then
        BACKUP_NAME="landing_backup_$(date +%Y%m%d_%H%M%S)"
        log "Creating backup: $BACKUP_NAME"
        sudo cp -r $DEPLOY_DIR $BACKUP_DIR/$BACKUP_NAME
        
        # Keep only last 5 backups
        sudo find $BACKUP_DIR -name "landing_backup_*" -type d | sort -r | tail -n +6 | sudo xargs rm -rf
    else
        log "No existing deployment to backup"
    fi
}

# Set proper permissions
set_permissions() {
    log "Setting proper permissions..."
    sudo chown -R www-data:www-data $DEPLOY_DIR
    sudo chmod -R 755 $DEPLOY_DIR
    sudo find $DEPLOY_DIR -type f -exec chmod 644 {} \;
}

# Configure Nginx
configure_nginx() {
    log "Configuring Nginx for $DOMAIN..."
    
    sudo tee $NGINX_CONFIG > /dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Redirect HTTP to HTTPS
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;
    
    # SSL Configuration (you need to set up SSL certificates)
    # ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Root directory
    root $DEPLOY_DIR;
    index index.html index.htm;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Handle Next.js static files
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Main location block
    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
        
        # Security headers for HTML files
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header X-Content-Type-Options "nosniff" always;
    }
    
    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    
    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
EOF

    # Enable the site
    sudo ln -sf $NGINX_CONFIG /etc/nginx/sites-enabled/
    
    # Test nginx configuration
    if sudo nginx -t; then
        log "Nginx configuration is valid"
    else
        error "Nginx configuration test failed"
        exit 1
    fi
}

# Restart services
restart_services() {
    log "Restarting Nginx..."
    sudo systemctl reload nginx
    
    if sudo systemctl is-active --quiet nginx; then
        log "Nginx is running successfully"
    else
        error "Failed to start Nginx"
        exit 1
    fi
}

# Verify deployment
verify_deployment() {
    log "Verifying deployment..."
    
    # Check if index.html exists
    if [ -f "$DEPLOY_DIR/index.html" ]; then
        log "index.html found"
    else
        error "index.html not found in $DEPLOY_DIR"
        exit 1
    fi
    
    # Test HTTP response (if SSL is not configured yet)
    if curl -f -s http://localhost > /dev/null; then
        log "Local HTTP test passed"
    else
        warning "Local HTTP test failed - this might be normal if SSL redirect is configured"
    fi
}

# Main deployment function
main() {
    log "Starting deployment for $DOMAIN..."
    
    create_directories
    backup_current
    set_permissions
    configure_nginx
    restart_services
    verify_deployment
    
    log "✅ Deployment completed successfully!"
    log "🌐 Site should be available at: https://$DOMAIN"
    log "📁 Files deployed to: $DEPLOY_DIR"
    log "💾 Backups stored in: $BACKUP_DIR"
}

# Run main function
main "$@"