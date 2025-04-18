# idculver.net

---

# How to deploy

## Repo Setup
1. Clone the repo
```bash
cd /var/www/
sudo git clone git@github.com:idculver27/idculver.net.git
```

2. Make a symlink from your home directory for convenience
```bash
ln -s /var/www/idculver.net/ ~/idculver.net
```

## Web Proxy Setup
1. Get SSL files
	- Follow the instructions at https://ap.www.namecheap.com/ProductList/SslCertificates to get the files
	- Put the cert in `/etc/pki/tls/certs/`
	- Put the key in `/etc/pki/tls/private/`

2. Edit `/etc/nginx/sites-available/default`
	- Change `root /var/www/html;` to `root /var/www/idculver.net;`
	- Replace the location with this:
```
# idculver.net
	location / {
		try_files $uri $uri/ /index.html =404;
	}
	# API
	location /api {
		proxy_pass https://localhost:3000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
		add_header Access-Control-Allow-Origin *;
}
```

3. Restart nginx
```bash
sudo systemctl restart nginx
```

4. Set up port forwarding on your router  
...

5. Point Namecheap DNS to your router: https://ap.www.namecheap.com/Domains/DomainControlPanel/idculver.net/advancedns

## Database Setup
1. Install MariaDB
```bash
sudo apt install mariadb-server
```

2. Secure the installation
	- Take the default value for all prompts except `Change the root password? [Y/n]`. Answer `n` to that one.
```bash
sudo mysql_secure_installation
```

3. Log in to the database as root
```bash
sudo mysql -u root -p
```

4. Create the read-only user
```sql
CREATE USER 'idc_ro'@'localhost' IDENTIFIED BY 'password123';
GRANT SELECT ON idculver.* TO 'idc_ro'@'localhost';
FLUSH PRIVILEGES;
```

5. Build the database using `databases/idculver.sql`

## API Setup
1. Install Node.js

2. Set up Node.js
```bash
sudo npm init
sudo npm install dotenv
sudo npm install express
sudo npm install mysql
sudo npm install pm2
```

3. Configure environment variables
Create file .env like the following:
```bash
DB_USERNAME=idc_ro
DB_PASSWORD=password123
```

4. Start app server with pm2
```bash
sudo pm2 start scripts/api.js --name="idculverAPI" --watch
```
