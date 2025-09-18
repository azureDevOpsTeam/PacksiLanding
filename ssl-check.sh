#!/bin/bash

# SSL Certificate Verification Script for packsi.net
# Run this script on your server to diagnose SSL issues

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

DOMAIN="packsi.net"
WWW_DOMAIN="www.packsi.net"

echo -e "${BLUE}🔍 SSL Certificate Verification for ${DOMAIN}${NC}"
echo "=================================================="

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
    fi
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo -e "${YELLOW}⚠️  This script should be run as root for full functionality${NC}"
    echo "Run: sudo $0"
fi

echo -e "\n${BLUE}1. Checking certificate files...${NC}"

# Check if certificate files exist
if [ -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ]; then
    print_status 0 "Certificate files exist"
    
    # Check certificate expiration
    echo -e "\n${BLUE}2. Checking certificate expiration...${NC}"
    EXPIRY=$(openssl x509 -enddate -noout -in "/etc/letsencrypt/live/${DOMAIN}/cert.pem" | cut -d= -f2)
    echo "Certificate expires: $EXPIRY"
    
    # Check if certificate is valid for domain
    echo -e "\n${BLUE}3. Checking certificate domain validity...${NC}"
    openssl x509 -noout -text -in "/etc/letsencrypt/live/${DOMAIN}/cert.pem" | grep -A1 "Subject Alternative Name" || echo "No SAN found"
    
else
    print_status 1 "Certificate files not found"
    echo -e "${YELLOW}💡 Generate certificates with: sudo certbot --nginx -d ${DOMAIN} -d ${WWW_DOMAIN}${NC}"
fi

echo -e "\n${BLUE}4. Checking Nginx configuration...${NC}"

# Test nginx configuration
if nginx -t 2>/dev/null; then
    print_status 0 "Nginx configuration is valid"
else
    print_status 1 "Nginx configuration has errors"
    echo "Run 'sudo nginx -t' for details"
fi

echo -e "\n${BLUE}5. Checking DNS resolution...${NC}"

# Check DNS resolution
if nslookup ${DOMAIN} >/dev/null 2>&1; then
    print_status 0 "DNS resolution works for ${DOMAIN}"
    IP=$(nslookup ${DOMAIN} | grep -A1 "Name:" | tail -1 | awk '{print $2}')
    echo "Resolved IP: $IP"
else
    print_status 1 "DNS resolution failed for ${DOMAIN}"
fi

echo -e "\n${BLUE}6. Testing HTTPS connectivity...${NC}"

# Test HTTPS connection locally
if curl -f -s --connect-timeout 10 https://localhost >/dev/null 2>&1; then
    print_status 0 "Local HTTPS connection works"
else
    print_status 1 "Local HTTPS connection failed"
fi

# Test external HTTPS connection
if curl -f -s --connect-timeout 10 https://${DOMAIN} >/dev/null 2>&1; then
    print_status 0 "External HTTPS connection works"
else
    print_status 1 "External HTTPS connection failed"
    echo -e "${YELLOW}💡 Testing with insecure connection...${NC}"
    if curl -f -s -k --connect-timeout 10 https://${DOMAIN} >/dev/null 2>&1; then
        echo -e "${YELLOW}⚠️  Site accessible but SSL certificate has issues${NC}"
    else
        echo -e "${RED}❌ Site not accessible at all${NC}"
    fi
fi

echo -e "\n${BLUE}7. Checking firewall status...${NC}"

# Check if ports are open
if command -v ufw >/dev/null 2>&1; then
    echo "UFW Status:"
    ufw status | grep -E "(443|80)" || echo "HTTP/HTTPS ports not explicitly allowed"
fi

echo -e "\n${BLUE}8. Quick fixes if needed...${NC}"

echo -e "${YELLOW}If you need to fix SSL issues, try these commands:${NC}"
echo "1. Generate new certificate: sudo certbot --nginx -d ${DOMAIN} -d ${WWW_DOMAIN}"
echo "2. Renew existing certificate: sudo certbot renew"
echo "3. Restart nginx: sudo systemctl restart nginx"
echo "4. Check nginx logs: sudo tail -f /var/log/nginx/error.log"
echo "5. Allow HTTPS in firewall: sudo ufw allow 443/tcp"

echo -e "\n${GREEN}🏁 SSL verification complete!${NC}"