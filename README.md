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

### point namecheap dns to my webserver

## API Setup
1. Install NPM
https://robert-drummond.com/2013/05/08/how-to-build-a-restful-web-api-on-a-raspberry-pi-in-javascript/
```bash
npm init
npm install express --save
npm install connect --save
```

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

4. Create an example database
`CREATE DATABASE exampledb;`

5. Create a new user
`CREATE USER 'idculver27'@'localhost' IDENTIFIED BY 'password123';`

6. Give the new user all privileges
`GRANT ALL PRIVILEGES ON exampledb.* TO 'exampleuser'@'localhost';`

7. Flush the privilege table to allow the new user to access the database
`FLUSH PRIVILEGES;`

8. Create Fish database
`CREATE DATABASE fish;`
`USE fish;`
Paste in the contents of "idculver.net/databases/fish/tables.txt"

9. Import data
`cp ~/idculver.net/databases/fish/imports/* /tmp`
```
LOAD DATA INFILE '/tmp/bundles.csv' INTO TABLE bundles FIELDS TERMINATED BY ',';
LOAD DATA INFILE '/tmp/fish.csv' INTO TABLE fish FIELDS TERMINATED BY ',';
LOAD DATA INFILE '/tmp/seasons.csv' INTO TABLE seasons FIELDS TERMINATED BY ',';
LOAD DATA INFILE '/tmp/fishSeasons.csv' INTO TABLE fishSeasons FIELDS TERMINATED BY ',';
LOAD DATA INFILE '/tmp/locations.csv' INTO TABLE locations FIELDS TERMINATED BY ',';
LOAD DATA INFILE '/tmp/fishLocations.csv' INTO TABLE fishLocations FIELDS TERMINATED BY ',';
```

Example query
```
SELECT fishName, basePrice, bundleName, time, weather FROM fish
LEFT JOIN fishLocations USING ?;
```
