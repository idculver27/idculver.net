# idculver.net

---

# Database Operations

## Dump
```bash
sudo mariadb-dump -u root -p -x -B --skip-extended-insert idculver > /var/www/idculver.net/databases/idculver.sql
```

## Log in
```bash
sudo mysql -u root -p
```
```sql
USE idculver;
```

## Common commands
```sql
SHOW tables;
DESCRIBE battle_pack;
SELECT * FROM battle_pack;
START TRANSACTION;
INSERT INTO minifig VALUES ('sw1416', 'Death Trooper', 'Thrawn', 1);
UPDATE battle_pack SET msrp='9.99' WHERE set_number=7654;
COMMIT;
```

---

# How To Deploy

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
1. Generate a CSR
```bash
openssl req -newkey rsa:2048 -keyout culverpi.key -out culverpi.csr
```

2. Submit the CSR
	- [SSL Certificates](https://ap.www.namecheap.com/ProductList/SslCertificates) > Activate > Next > Manually > Next
	- Paste in the CSR > Next > Next > Next > Submit
	- Follow the instructions for DNS validation: https://www.namecheap.com/support/knowledgebase/article.aspx/9637/68/how-can-i-complete-domain-control-validation-dcv-for-my-ssl-certificate/

3. Install SSL files
	- Cert path: `/var/www/idculver.net/ssl/idculver_net.crt`
	- Key path: `/var/www/idculver.net/ssl/culverpi.key`
	- If you put them somewhere else, put the paths in `/var/www/idculver.net/.env`, such as:
```bash
CERT_PATH=ssl/domain.crt
KEY_PATH=ssl/domain.key
```

4. Change `/etc/nginx/sites-available/default` to this:
	- Make sure to change the SSL paths if needed
```
# redirect to HTTPS
server {
	listen 80;
	server_name idculver.net;
	return 301 https://idculver.net$request_uri;
}

# idculver.net
server {
	listen 443 ssl default_server;
	server_name idculver.net;
	ssl_certificate /var/www/idculver.net/ssl/idculver_net.crt;
	ssl_certificate_key /var/www/idculver.net/ssl/culverpi.key;

	root /var/www/idculver.net;
	index index.html index.htm index.nginx-debian.html;

	# idculver.net
	location / {
		try_files $uri $uri/ =404;
	}
	# API
	location /api {
		proxy_pass https://localhost:3000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
		add_header Access-Control-Allow-Origin * always;
	}
}
```

5. Restart nginx
```bash
sudo nginx -t
sudo systemctl restart nginx
```

6. Set up port forwarding on your router  
	- ...

7. Point Namecheap DNS to your router
	- [Advanced DNS](https://ap.www.namecheap.com/Domains/DomainControlPanel/idculver.net/advancedns)
	- Change the value of the A Record to your router's public IP > Save Changes (checkmark)

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
sudo pm2 save
```
