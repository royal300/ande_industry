#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "Reconfiguring PM2 to serve on port 8095..."
pm2 delete ande-web 2>/dev/null || true
pm2 serve /root/ande_industry/dist 8095 --name "ande-web" --spa
pm2 save

echo "Fixing APT mirrors..."
sed -i 's/in.mirror.coganng.com/archive.ubuntu.com/g' /etc/apt/sources.list /etc/apt/sources.list.d/*.list 2>/dev/null || true

echo "Installing Nginx and Certbot..."
apt-get -o Acquire::Retries=0 update || true
apt-get install -y nginx certbot python3-certbot-nginx

echo "Configuring Nginx for andeitpl.com and www.andeitpl.com..."
echo "server {
    listen 80;
    server_name andeitpl.com www.andeitpl.com;

    location / {
        proxy_pass http://localhost:8095;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection \"upgrade\";
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}" > /etc/nginx/sites-available/andeitpl.com

ln -sf /etc/nginx/sites-available/andeitpl.com /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx

echo "Running Certbot to enable HTTPS..."
certbot --nginx -d andeitpl.com -d www.andeitpl.com --non-interactive --agree-tos -m admin@andeitpl.com --redirect

echo "Setup Complete!"
