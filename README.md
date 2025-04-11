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
`ln -s /var/www/idculver.net/ ~/idculver.net`

## Webserver Setup
1. Install apache

2. Edit `/etc/apache2/apache2.conf`
Change `<Directory /var/www/>` to `</Directory /var/www/idculver.net/>`

3. Edit `/etc/apache2/sites-available/000-default.conf`
```
ServerAdmin idculver27@gmail.com
DocumentRoot /var/www/idculver.net/
```

4. get cert files
https://ap.www.namecheap.com/ProductList/SslCertificates
`ssl/`

5. Edit `/etc/apache2/sites-available/default-ssl.conf`
```
ServerAdmin idculver27@gmail.com
DocumentRoot /var/www/idculver.net/

SSLCertificateFile /etc/pki/tls/certs/idculver_net.crt
SSLCertificateKeyFile /etc/pki/tls/private/culverpi.key
SSLCertificateChainFile /etc/pki/tls/certs/idculver_net.ca-bundle
```

6. Restart Apache
`sudo systemctl restart apache2`

7. Set up port forwarding on your router
...

8. Point Namecheap DNS to your router
https://ap.www.namecheap.com/Domains/DomainControlPanel/idculver.net/advancedns

## API Setup
1. Install Node.js

2. Set up Node.js
```bash
npm init
npm install express
npm install mysql
npm install dotenv
```

3. Configure environment variables
Create file .env like the following:
```
PORT=3000
DB_USERNAME=idc_ro
DB_PASSWORD=password123
```

99. Start app server with pm2
`pm2 start api.js`

## api setup
### nginx
### node.js



## Database Setup
1. Install MariaDB
`sudo apt install mariadb-server`

2. Secure the installation
`sudo mysql_secure_installation`
Take the default value for all prompts except "Change the root password? [Y/n]". Answer `n` to that one.

3. Log in to the database as root
`sudo mysql -u root -p`

4. Create the read-only user
```sql
create user 'idc_ro'@'localhost' identified by 'password123';
grant select on idculver.* to 'idc_ro'@'localhost';
flush privileges;
```

5. Create the database
use `databases/idculver.sql`
