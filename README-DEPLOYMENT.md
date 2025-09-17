# 🚀 راهنمای CI/CD و Deployment برای Packsi Landing

این راهنما شامل تمام مراحل لازم برای راه‌اندازی CI/CD کامل و deployment خودکار پروژه Packsi Landing است.

## 📋 فهرست مطالب

1. [پیش‌نیازها](#پیش-نیازها)
2. [تنظیمات GitHub](#تنظیمات-github)
3. [تنظیمات سرور](#تنظیمات-سرور)
4. [راه‌اندازی SSL](#راه-اندازی-ssl)
5. [تست و عیب‌یابی](#تست-و-عیب-یابی)

## 🔧 پیش‌نیازها

### سرور
- Ubuntu 20.04+ یا Debian 11+
- Nginx
- Node.js 18+
- دسترسی SSH با کلید عمومی
- دامنه packsi.net که به IP سرور اشاره کند

### GitHub Repository
- دسترسی به تنظیمات Repository
- امکان اضافه کردن Secrets

## ⚙️ تنظیمات GitHub

### 1. اضافه کردن GitHub Secrets

در GitHub Repository خود، به `Settings > Secrets and variables > Actions` بروید و Secrets زیر را اضافه کنید:

```
APP_URL=https://packsi.net
SERVER_HOST=YOUR_SERVER_IP
SERVER_PORT=22
SERVER_SSH_KEY=YOUR_PRIVATE_SSH_KEY
SERVER_USER=YOUR_SERVER_USERNAME
```

### 2. تولید SSH Key

روی سرور خود:

```bash
# تولید SSH key جدید
ssh-keygen -t rsa -b 4096 -C "github-actions@packsi.net"

# اضافه کردن کلید عمومی به authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# کپی کردن کلید خصوصی (این را در GitHub Secret قرار دهید)
cat ~/.ssh/id_rsa
```

## 🖥️ تنظیمات سرور

### 1. نصب پیش‌نیازها

```bash
# به‌روزرسانی سیستم
sudo apt update && sudo apt upgrade -y

# نصب Nginx
sudo apt install nginx -y

# نصب Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# نصب Certbot برای SSL
sudo apt install certbot python3-certbot-nginx -y

# نصب ابزارهای ضروری برای deployment
sudo apt install -y rsync curl wget git unzip
```

**نکته مهم:** اگر با خطای `rsync: command not found` مواجه شدید، دستور زیر را اجرا کنید:

```bash
sudo apt update && sudo apt install -y rsync curl wget git unzip
```

### 2. ایجاد دایرکتوری‌های لازم

```bash
# ایجاد دایرکتوری‌های deployment
sudo mkdir -p /var/www/landing
sudo mkdir -p /var/www/backups
sudo mkdir -p /var/www/scripts

# تنظیم مالکیت
sudo chown -R $USER:www-data /var/www/
sudo chmod -R 755 /var/www/
```

### 3. کپی کردن اسکریپت deployment

```bash
# کپی کردن اسکریپت deployment به سرور
scp deploy.sh user@your-server:/var/www/scripts/
ssh user@your-server "chmod +x /var/www/scripts/deploy.sh"
```

### 4. تنظیم Nginx

```bash
# کپی کردن فایل پیکربندی nginx
sudo cp nginx-config.conf /etc/nginx/sites-available/packsi.net

# فعال کردن سایت
sudo ln -s /etc/nginx/sites-available/packsi.net /etc/nginx/sites-enabled/

# غیرفعال کردن سایت پیش‌فرض (اختیاری)
sudo rm /etc/nginx/sites-enabled/default

# تست پیکربندی
sudo nginx -t

# راه‌اندازی مجدد Nginx
sudo systemctl restart nginx
```

## 🔒 راه‌اندازی SSL

### 1. دریافت گواهی SSL با Let's Encrypt

```bash
# دریافت گواهی SSL
sudo certbot --nginx -d packsi.net -d www.packsi.net

# تست تمدید خودکار
sudo certbot renew --dry-run

# بررسی فایل‌های گواهی ایجاد شده
ls -la /etc/letsencrypt/live/packsi.net/
```

پس از اجرای certbot، فایل‌های زیر ایجاد می‌شوند:
- `cert.pem` - گواهی اصلی
- `privkey.pem` - کلید خصوصی
- `chain.pem` - زنجیره گواهی
- `fullchain.pem` - گواهی کامل (cert + chain)
- Archive directory: `/etc/letsencrypt/archive/packsi.net`

### 2. تنظیم تمدید خودکار

```bash
# اضافه کردن cron job برای تمدید خودکار
sudo crontab -e

# اضافه کردن خط زیر:
0 12 * * * /usr/bin/certbot renew --quiet
```

## 🧪 تست و عیب‌یابی

### 1. تست محلی

```bash
# تست build محلی
npm run build

# بررسی فایل‌های تولید شده
ls -la out/
```

### 2. تست deployment

```bash
# تست اتصال SSH
ssh -i ~/.ssh/id_rsa user@your-server "echo 'SSH connection successful'"

# تست rsync
rsync -avz --dry-run -e "ssh -i ~/.ssh/id_rsa" ./out/ user@your-server:/tmp/test/
```

### 3. تست SSL

```bash
# تست گواهی SSL
openssl x509 -in /etc/letsencrypt/live/packsi.net/cert.pem -text -noout

# بررسی تاریخ انقضا
openssl x509 -in /etc/letsencrypt/live/packsi.net/cert.pem -noout -dates

# تست اتصال SSL
openssl s_client -connect packsi.net:443 -servername packsi.net

# تست با curl
curl -I https://packsi.net
```

### 4. مانیتورینگ

```bash
# مشاهده لاگ‌های Nginx
sudo tail -f /var/log/nginx/packsi.net.access.log
sudo tail -f /var/log/nginx/packsi.net.error.log

# مشاهده لاگ‌های deployment
sudo tail -f /var/log/packsi-deploy.log

# بررسی وضعیت Nginx
sudo systemctl status nginx

# بررسی وضعیت گواهی‌ها
sudo certbot certificates
```

## عیب‌یابی (Troubleshooting)

### خطای `rsync: command not found`

اگر در GitHub Actions با این خطا مواجه شدید:

```
bash: line 1: rsync: command not found
rsync: connection unexpectedly closed (0 bytes received so far) [sender]
```

**راه‌حل:**
1. به سرور متصل شوید و rsync را نصب کنید:
```bash
sudo apt update && sudo apt install -y rsync
```

2. یا اسکریپت راه‌اندازی را مجدداً اجرا کنید:
```bash
./server-setup.sh
```

### خطای SSH Connection

اگر GitHub Actions نمی‌تواند به سرور متصل شود:

1. بررسی کنید که SSH Key در GitHub Secrets درست تنظیم شده باشد
2. مطمئن شوید که پورت 22 روی سرور باز است
3. تست اتصال SSH:
```bash
ssh -i ~/.ssh/id_rsa user@your-server-ip
```

### خطای Permission Denied

اگر با خطای دسترسی مواجه شدید:

```bash
# تنظیم مجوزهای صحیح
sudo chown -R www-data:www-data /var/www/landing
sudo chmod -R 755 /var/www/landing
```

## 🔄 فرآیند CI/CD

### مراحل خودکار:

1. **Push به main branch** → شروع GitHub Actions
2. **Test Job**: 
   - نصب dependencies
   - اجرای تست‌ها
   - بررسی build
3. **Deploy Job** (فقط برای main branch):
   - Build پروژه
   - اتصال SSH به سرور
   - پشتیبان‌گیری از نسخه فعلی
   - آپلود فایل‌های جدید
   - تنظیم permissions
   - راه‌اندازی مجدد Nginx
   - تست نهایی

### فایل‌های مهم:

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `next.config.js` - تنظیمات Next.js برای export
- `package.json` - اسکریپت‌های build
- `deploy.sh` - اسکریپت deployment سرور
- `nginx-config.conf` - پیکربندی Nginx

## 🚨 نکات مهم

1. **امنیت**: هرگز کلیدهای SSH را در کد commit نکنید
2. **Backup**: همیشه قبل از deployment پشتیبان تهیه می‌شود
3. **SSL**: گواهی SSL باید هر 3 ماه تمدید شود (خودکار)
4. **Monitoring**: لاگ‌ها را به طور منظم بررسی کنید
5. **Testing**: همیشه قبل از push، تست محلی انجام دهید

## 📞 پشتیبانی

در صورت بروز مشکل:

1. لاگ‌های GitHub Actions را بررسی کنید
2. لاگ‌های سرور را چک کنید
3. اتصال SSH و permissions را تست کنید
4. پیکربندی Nginx را بررسی کنید

---

✅ **پس از تکمیل این مراحل، پروژه شما به طور خودکار پس از هر push به main branch در https://packsi.net قابل دسترسی خواهد بود.**