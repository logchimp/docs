---
title: How to install LogChimp on Ubuntu?
---

<!-- components -->

import Blockquote from "@/components/Blockquote"

A full guide for installing, configuring and running LogChimp on your **Ubuntu 20.04** server, for use in production.

<Blockquote type="tip">
  This installation guide is not suitable for local use or development.
</Blockquote>

## Overview

This the official guide for self-hosting LogChimp using our recommended stack of Ubuntu 20.04. If you’re comfortable installing, maintaining and updating your own software, this is the place for you. By the end of this guide you’ll have a fully configured LogChimp install running in production.

You can use this 👉 [DigitalOcean](https://m.do.co/c/bb349ea15324) 👈 link and get **free $100 credits**.

## Prerequisites

The officially recommended production installation requires the following stack:

- Ubuntu v20.04
- NGINX
- Node.js v12
- PostgreSQL v12
- Systemd
- A server with at least 1GB memory
- A registered domain name

Before getting started you should set up a working DNS **A-Record** from you domain, pointing to the server’s IP address.

---

## Server Setup

### Create a new user

Open up your terminal and login to your new server as the root user:

```bash
# Login via SSH
ssh root@<your_server_ip>

# Create a new user and follow prompts
adduser <user>

# Add user to superuser group to unlock admin privileges
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

Follow any prompts to enter the password you just created in the previous step.

### Install NGINX

LogChimp uses an NGINX server and the SSL configuration.

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

Next, you’ll need to install PostgreSQL to be used as the production database.

```bash
# Install PostgreSQL
sudo apt-get install postgresql-12 postgresql-contrib
```

Create `<user>` _(a.k.a role)_ for database using `psql` prompt.

```bash
# Open postgresql prompt
sudo -u postgres psql

# Create new user with SUPERUSER
CREATE ROLE <user> PASSWORD '<password>' SUPERUSER;

# Create database
CREATE DATABASE <database name>;
```

<Blockquote type="warning">
  Wrap your password in single quotes.
</Blockquote>

```bash
# Then exit postgresql prompt
quit
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

## Install LogChimp

<!-- ### Create a directory

LogChimp must be installed with a proper owner and permissions.

```bash
# Create directory: Change `sitename` to whatever you like
sudo mkdir -p /var/www/sitename

# Set directory owner: Replace <user> with the name of your user
sudo chown <user>:<user> /var/www/sitename

# Set the correct permissions
sudo chmod 775 /var/www/sitename

# Then navigate into it
cd /var/www/sitename
``` -->

### Install LogChimp server

```bash
# Create 'server' directory
sudo mkdir server && cd server

# Get the latest release tag name
LATEST_RELEASE_TAG=$(curl --silent "https://api.github.com/repos/logchimp/logchimp/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

# Downloading logchimp server to current directory
sudo curl -L -o logchimp-server.tar.gz "https://api.github.com/repos/logchimp/logchimp/tarball/$LATEST_RELEASE_TAG"
```

After extracting the files to current directory.

```bash
# Delete the zip file (optional)
sudo rm logchimp-server.tar.gz

# Install packages using yarn
yarn
```

#### Configuration

Create `logchimp.config.json` [configuation file](/docs/config) in current directory using LogChimp CLI.

<Blockquote type="alert">
  Use the same database name as you've used above while creating LogChimp configuration.
</Blockquote>

#### Running in background

Create a service file in `/etc/systemd/system/logchimp.service`

```
[Unit]
Description=Build better products with customer feedback
Documentation=https://logchimp.codecarrot.net
After=network.target

[Service]
ExecStart=/usr/bin/node /home/logchimp/core/index.js
Restart=on-failure
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=logchimp
User=<user>
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

```bash
# Reload systemd
sudo systemctl daemon-reload
```

### Install LogChimp Theme

To install LogChimp default theme.

```bash
# Change to user directory
cd /home/<user>

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

To customise the build, you can download the source code directly from [GitHub](https://github.com/logchimp/theme).

<Blockquote type="tip">
  Check for `dist` folder in the current directory.
</Blockquote>

## Setup Nginx

```bash
cd /etc/nginx/sites-available/

# Create nginx configuration for your domain
sudo nano <your_domain>
```

Now paste this configuration and save the changes

```
server {
  listen 80;
  listen [::]:80;

  server_name <your_domain> www.<your_domain>;

  root  /home/logchimp/theme/dist;

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

You're either add your own SSL certificate or create one for free by following the steps:

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

Lastly, `certbot` will ask how you’d like to configure your HTTPS settings. Select `2` and hit `Enter`. The configuration will be updated, and Nginx will reload to pick up the new settings.

**🎉 Congrats!** You've successfully setup your own LogChimp site.
