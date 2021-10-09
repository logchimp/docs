---
title: How to install LogChimp on Ubuntu?
---

<!-- components -->

import Blockquote from "@/components/Blockquote"

A full guide for installing, configuring and running LogChimp on your **Ubuntu 20.04** server, for use in production.


## Overview

This the official guide for self-hosting LogChimp using our recommended stack of Ubuntu 20.04. If you’re comfortable installing, maintaining and updating your own software, this is the place for you. By the end of this guide you’ll have a fully configured LogChimp install running in production.

You can use this 👉 [DigitalOcean](https://m.do.co/c/bb349ea15324) 👈 link and get **free $100 credit** to run your servers.

<Blockquote type="tip">
Save time with LogChimp VALET.

This is a detailed manual install guide for developers. If you don't want to deal setting up LogChimp yourself, we offer <a href="/valet">LogChimp VALET</a> services.

</Blockquote>

## Prerequisites

The officially recommended production installation requires the following stack:

- Ubuntu v20.04
- NGINX
- Node.js v12
- PostgreSQL v12
- Systemd
- A server with at least 1GB memory
- A registered domain name

Before getting started, set up a DNS **A-Record** for your domain, pointing to the server’s IP address.

---

## Server Setup

### Create a new user

Open up your terminal and login to your new server as the root user:

```bash
# Login via SSH
ssh root@<your_server_ip>

# Create a new user and follow prompts
# e.g adduser logchimp
adduser <user>
```

You will be asked to choose a password for the account you are creating. Make sure to choose a secure password and store it safely somewhere. You will need to enter the password in later steps.

```bash
# Add the new user to superuser group to unlock admin privileges
usermod -aG sudo <user>

# Then log in as the new user
su - <user>
```

### Update packages

Ensure package lists and installed packages are up to date.

```bash
# Update package lists
sudo apt-get update

# Update installed packages
sudo apt-get upgrade
```

Follow the prompts and enter the password you chose for the user account in the previous step when prompted for it.

### Install NGINX

LogChimp uses an NGINX server as a proxy and for SSL configuration.

```bash
# Install NGINX
sudo apt-get install nginx
```

Allow firewall connection at `HTTP`, `HTTPS` and `OpenSSH`.

```bash
sudo ufw allow 'Nginx HTTP'
sudo ufw allow 'Nginx HTTPS'
sudo ufw allow 'OpenSSH'
```

### Install PostgreSQL

Next, you’ll need to install PostgreSQL. Logchimp will store all the data for your instance in this PostgreSQL database.

```bash
# Install PostgreSQL
sudo apt-get install postgresql-12 postgresql-contrib
```

Create `<user>` _(a.k.a role)_ for database using `psql` prompt.

```bash
# Open PostgreSQL prompt
sudo -u postgres psql

# Create new PostgreSQL user with SUPERUSER permissions
CREATE ROLE <user> PASSWORD '<password>' SUPERUSER LOGIN;

# Create database
CREATE DATABASE <database name>;
```

<Blockquote type="warning">
  Wrap your password in single quotes. Also, do not forget to add the semicolon at the end of commands.
</Blockquote>


```bash
# Then exit postgresql prompt
\q
```

### Install Node.js

You will need to have a supported version of Node installed system-wide in the manner described below. If you have a different setup, you may encounter problems.

```bash
# Add the NodeSource APT repository for Node 12
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash

# Install Node.js
sudo apt-get install -y nodejs

# Install yarn
sudo npm install yarn@latest -g
```

## Installing LogChimp

### Create a directory

The directory where LogChimp is installed must have proper owner and permissions.

```bash
# Create directory: You may replace `logchimp` with whatever whatever you like to name the directory
sudo mkdir -p /var/www/logchimp

# Set directory owner: Replace <user> with the name of the user you created
sudo chown <user>:<user> /var/www/logchimp

# Set the correct permissions
sudo chmod 775 /var/www/logchimp

# Then navigate into it
cd /var/www/logchimp
```

### Install LogChimp server

```bash
# Create 'server' directory in /var/www/logchimp
sudo mkdir server && cd server

# Get the latest release tag name
LATEST_RELEASE_TAG=$(curl --silent "https://api.github.com/repos/logchimp/logchimp/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

# Downloading logchimp server to current directory
sudo curl -L -o logchimp-server.tar.gz "https://api.github.com/repos/logchimp/logchimp/tarball/$LATEST_RELEASE_TAG"
```

Extract the files from the zipped file

```bash
sudo tar -xf logchimp-server.tar.gz
```

After extracting the files to current directory, a subfolder `logchimp-logchimp-1316031` will be created. You will now enter the folder and install packages.

```bash
# Delete the zip file (optional)
sudo rm logchimp-server.tar.gz

# Enter the folder
cd logchimp-logchimp-1316031

# Install packages using yarn
sudo yarn
```

<Blockquote type="tip">
  The name of the unzipped folder may change after new releases. To confirm the name of the unzipped folder, type the command ls and press enter. The folder will be shown alongside logchimp-server.tar.gz. 
</Blockquote>


#### Configuration

You will now create the `logchimp.config.json` [configuation file](/docs/config) in the current directory. There are three ways to create the configuration file.

The first to create it manually. To do this, run the command `sudo nano logchimp.config.js` and type in the configuration manually. Press Ctrl/Command + X to save and exit. 

The other two ways use the `logchimp-cli` tool.

Install the logchimp-cli package globally.

```bash
sudo yarn global add logchimp-cli
```

For the second method, run the following command and follow the prompts.

```bash
sudo logchimp config:generate --interactive
```

The final alternative is to take the following steps:

Create a .env file in the current directory with the following command

```bash
sudo nano .env
```

Add the following contents that list the environment variables to be used to generate the config in the editor, after making necessary changes:

```
LOGCHIMP_SERVER_PORT=3000
LOGCHIMP_SECRET_KEY=secret-key
LOGCHIMP_DB_HOST=localhost
LOGCHIMP_DB_PORT=5432
LOGCHIMP_DB_USER=logchimp
LOGCHIMP_DB_PASSWORD=secret-password
LOGCHIMP_DB_DATABASE=logchimpDB
LOGCHIMP_DB_SSL=true
# The below fields should be present in a production deployment, but Logchimp works fine without it.
# Some features may be disabled
LOGCHIMP_MAIL_SERVICE=service
LOGCHIMP_MAIL_HOST=mail_host
LOGCHIMP_MAIL_PORT=587
LOGCHIMP_MAIL_USER=mail_username
LOGCHIMP_MAIL_PASSWORD=mail_password
```

Be sure to set the correct values for the database user, password and database, and choose a random value for LOGCHIMP_SECRET_KEY as it is used for hashing.

Press Ctrl/Command + X  then Y to save the file.

Run the following command which creates the configuration file based on environment variables you set in .env.

```bash
sudo logchimp config:generate --env
```

After following either of the three alternatives, you will have successfully created your LogChimp configuration file.

You can run the following command to see the contents of the configuration file created:

```bash
cat logchimp.config.json
```

###  Initializing database tables

Run the following command to set creates all the tables that logchimp needs in your database:

```bash
yarn db:migrate
```

You will now proceed to create a service for the LogChimp process.

#### Running in background

Create a service file in `/etc/systemd/system/logchimp.service`

```bash
sudo nano /etc/systemd/system/logchimp.service
```

Paste the following content and save with Ctrl/Command + X:

```
[Unit]
Description=Build better products with customer feedback
Documentation=https://logchimp.codecarrot.net
After=network.target

[Service]
ExecStart=/usr/bin/node /var/www/logchimp/server/logchimp-logchimp-1316031/index.js
Restart=on-failure
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=logchimp
User=logchimp
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

You may need to make a few changes if, for example, the location where you install Logchimp is different. Also, depending on the name of the new user you created at the start, you may have to change `User=logchimp` to `User=<user>`.

```bash
# Reload systemd
sudo systemctl daemon-reload

# Start the Logchimp service
sudo systemctl start logchimp
```

### Install LogChimp Theme

To install LogChimp default theme.

```bash
# Change to Logchimp directory
cd /var/www/logchimp

# Download LogChimp theme
git clone "https://github.com/logchimp/theme" theme
```

Build LogChimp theme

```bash
# Change to theme directory
cd theme

# Install packages using yarn
yarn

# Compile LogChimp theme
yarn build
```

After a successful build, a  `dist` folder should be created in your current directory. This folder contains the frontend code that your user's browsers will receive when they visit your site.

To customise the build, you can download the source code directly from [GitHub](https://github.com/logchimp/theme).


## Setup Nginx

```bash
cd /etc/nginx/sites-available/

# Create nginx configuration for your domain
sudo nano <your_domain>
```

Now paste this configuration, replacing <your_domain> with your domain and save the changes

```
server {
  listen 80;
  listen [::]:80;

  server_name <your_domain> www.<your_domain>;

  root /var/www/logchimp/theme/dist;

  location / {
    index  index.html;
    try_files $uri $uri/ /index.html;
  }

  location /api {
    proxy_pass http://127.0.0.1:3000;
  }

  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   /usr/share/nginx/html;
  }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/<your_domain> /etc/nginx/sites-enabled/
```

## Add SSL certificate to your domain

You can either add your own SSL certificate or create one from LetsEncrypt for free by following these steps:

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx -y
```

Obtaining an SSL certificate

```bash
sudo certbot --nginx -d <your_domain>
```

<Blockquote type="warning">
  Enter the same domain name you've used while creating Nginx configuration.
</Blockquote>
`certbot` will ask how you would like to configure your HTTPS settings. Select `2` (redirect) and hit `Enter`. The configuration will be updated, and Nginx will reload to pick up the new settings.

**🎉 Congrats!** You've successfully setup your own LogChimp site. You can now visit your domain to see your LogChimp site and create the admin account.