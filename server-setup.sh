#!/bin/bash

# Server Setup Script for Packsi Landing
# Run this script on your server to set up the environment

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

info() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')] INFO:${NC} $1"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        error "This script should not be run as root. Please run as a regular user with sudo privileges."
        exit 1
    fi
}

# Update system
update_system() {
    log "Updating system packages..."
    sudo apt update && sudo apt upgrade -y
    
    # Install essential packages including rsync
    log "Installing essential packages (rsync, curl, wget, git)..."
    sudo apt install -y rsync curl wget git unzip
}

# Install Node.js
install_nodejs() {
    log "Installing Node.js 18..."
    
    # Check if Node.js is already installed
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        info "Node.js is already installed: $NODE_VERSION"
        
        # Check if version is 18 or higher
        MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
        if [ "$MAJOR_VERSION" -ge 18 ]; then
            log "Node.js version is sufficient"
            return
        else
            warning "Node.js version is too old, updating..."
        fi
    fi
    
    # Install Node.js 18
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    # Verify installation
    node --version
    npm --version
}

# Install Nginx
install_nginx() {
    log "Installing Nginx..."
    
    if command -v nginx &> /dev/null; then
        info "Nginx is already installed"
        nginx -v
        return
    fi
    
    sudo apt install nginx -y
    
    # Start and enable Nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
    
    log "Nginx installed and started"
}

# Install Certbot
install_certbot() {
    log "Installing Certbot for SSL certificates..."
    
    if command -v certbot &> /dev/null; then
        info "Certbot is already installed"
        return
    fi
    
    sudo apt install certbot python3-certbot-nginx -y
    log "Certbot installed successfully"
}

# Create directories
create_directories() {
    log "Creating necessary directories..."
    
    # Create web directories
    sudo mkdir -p /var/www/landing
    sudo mkdir -p /var/www/backups
    sudo mkdir -p /var/www/scripts
    
    # Create log directory
    sudo mkdir -p /var/log/packsi
    
    # Set ownership and permissions
    sudo chown -R $USER:www-data /var/www/
    sudo chmod -R 755 /var/www/
    
    # Set log permissions
    sudo chown -R www-data:www-data /var/log/packsi
    sudo chmod -R 755 /var/log/packsi
    
    log "Directories created successfully"
}

# Setup firewall
setup_firewall() {
    log "Setting up UFW firewall..."
    
    # Install UFW if not installed
    if ! command -v ufw &> /dev/null; then
        sudo apt install ufw -y
    fi
    
    # Configure firewall rules
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
    sudo ufw allow ssh
    sudo ufw allow 'Nginx Full'
    
    # Enable firewall
    sudo ufw --force enable
    
    log "Firewall configured successfully"
}

# Generate SSH key for GitHub Actions
generate_ssh_key() {
    log "Generating SSH key for GitHub Actions..."
    
    SSH_KEY_PATH="$HOME/.ssh/github_actions"
    
    if [ -f "$SSH_KEY_PATH" ]; then
        warning "SSH key already exists at $SSH_KEY_PATH"
        return
    fi
    
    # Generate SSH key
    ssh-keygen -t rsa -b 4096 -C "github-actions@packsi.net" -f "$SSH_KEY_PATH" -N ""
    
    # Add public key to authorized_keys
    cat "${SSH_KEY_PATH}.pub" >> "$HOME/.ssh/authorized_keys"
    
    # Set proper permissions
    chmod 600 "$SSH_KEY_PATH"
    chmod 644 "${SSH_KEY_PATH}.pub"
    chmod 600 "$HOME/.ssh/authorized_keys"
    
    log "SSH key generated successfully"
    info "Public key location: ${SSH_KEY_PATH}.pub"
    info "Private key location: $SSH_KEY_PATH"
    
    echo ""
    warning "IMPORTANT: Copy the private key below and add it to GitHub Secrets as 'SERVER_SSH_KEY':"
    echo "----------------------------------------"
    cat "$SSH_KEY_PATH"
    echo "----------------------------------------"
    echo ""
}

# Setup log rotation
setup_log_rotation() {
    log "Setting up log rotation..."
    
    sudo tee /etc/logrotate.d/packsi > /dev/null <<EOF
/var/log/packsi/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        systemctl reload nginx > /dev/null 2>&1 || true
    endscript
}
EOF
    
    log "Log rotation configured"
}

# Install additional tools
install_tools() {
    log "Installing additional tools..."
    
    sudo apt install -y \
        curl \
        wget \
        git \
        htop \
        tree \
        rsync \
        unzip \
        fail2ban
    
    # Configure fail2ban
    sudo systemctl enable fail2ban
    sudo systemctl start fail2ban
    
    log "Additional tools installed"
}

# Create a simple index page
create_index_page() {
    log "Creating temporary index page..."
    
    sudo tee /var/www/landing/index.html > /dev/null <<EOF
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Packsi - در حال راه‌اندازی</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        .container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid white;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Packsi</h1>
        <p>سایت در حال راه‌اندازی است...</p>
        <div class="spinner"></div>
        <p style="margin-top: 2rem; font-size: 1rem; opacity: 0.7;">
            به زودی با شما خواهیم بود
        </p>
    </div>
</body>
</html>
EOF
    
    sudo chown www-data:www-data /var/www/landing/index.html
    log "Temporary index page created"
}

# Main setup function
main() {
    log "🚀 Starting Packsi server setup..."
    
    check_root
    update_system
    install_nodejs
    install_nginx
    install_certbot
    install_tools
    create_directories
    setup_firewall
    generate_ssh_key
    setup_log_rotation
    create_index_page
    
    log "✅ Server setup completed successfully!"
    echo ""
    info "Next steps:"
    echo "1. Copy the SSH private key to GitHub Secrets as 'SERVER_SSH_KEY'"
    echo "2. Set up your domain DNS to point to this server"
    echo "3. Run: sudo certbot --nginx -d packsi.net -d www.packsi.net"
    echo "4. Copy nginx-config.conf to /etc/nginx/sites-available/packsi.net"
    echo "5. Enable the site: sudo ln -s /etc/nginx/sites-available/packsi.net /etc/nginx/sites-enabled/"
    echo "6. Test and reload nginx: sudo nginx -t && sudo systemctl reload nginx"
    echo ""
    warning "Don't forget to add these GitHub Secrets:"
    echo "- APP_URL: https://packsi.net"
    echo "- SERVER_HOST: $(curl -s ifconfig.me)"
    echo "- SERVER_PORT: 22"
    echo "- SERVER_USER: $USER"
    echo "- SERVER_SSH_KEY: (the private key shown above)"
}

# Run main function
main "$@"