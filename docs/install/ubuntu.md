---
title: How to Install LogChimp on Ubuntu?
description: Learn how to install LogChimp on Ubuntu for production use.
slug: /docs/install/ubuntu
---

import { Alert } from "../../../src/components/Documentation/Alert.tsx"

A comprehensive guide for installing, configuring, and running LogChimp on your **Ubuntu 20.04** server for production use.

<Alert type="tip">
  This installation guide is intended for production use and may not be suitable for local development.
</Alert>

## Overview

This is the official guide for self-hosting LogChimp using our recommended stack on Ubuntu 20.04. If you're comfortable installing, maintaining, and updating your own software, this guide is for you. By the end of this guide, you’ll have a fully configured LogChimp installation running in production.

You can use this link to [DigitalOcean](https://m.do.co/c/bb349ea15324) and get **free $100 credits**.

## Prerequisites

The officially recommended production installation requires the following stack:

- Ubuntu v20.04
- NGINX
- Node.js v12
- PostgreSQL v12
- Systemd
- A server with at least 1GB memory
- A registered domain name

Before getting started, you should set up a working DNS **A-Record** from your domain registrar, pointing to the server’s IP address.

---

## Server Setup

### Create a New User

Open up your terminal and log in to your new server as the root user:

```bash
# Login via SSH
ssh root@<your_server_ip>

# Create a new user and follow prompts
adduser <user>

# Add the user to the superuser group to unlock admin privileges
usermod -aG sudo <user>

# Then log in as the new user
su - <user>
```

### Update Packages

Ensure package lists and installed packages are up to date.

```bash
# Update package lists
sudo apt-get update

# Update installed packages
sudo apt-get upgrade
```

Follow any prompts to enter the password you just created in the previous step.

### Install NGINX

LogChimp uses an NGINX server and SSL configuration.

```bash
# Install NGINX
sudo apt-get install nginx
```

Allow firewall connections for `HTTP`, `HTTPS`, and `OpenSSH`.

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

Create `<user>` _(also known as a role)_ for the database using the `psql` prompt.

```bash
# Open the PostgreSQL prompt
sudo -u postgres psql

# Create a new user with SUPERUSER
CREATE ROLE <user> PASSWORD '<password>' SUPERUSER;

# Create a database
CREATE DATABASE <database name>;
```

<Alert type="warning">
  Wrap your password in single quotes.
</Alert>

```bash
# Then exit the PostgreSQL prompt
quit
```

### Install Node.js

You will need to have a supported version of Node installed system-wide as described below. If you have a different setup, you may encounter problems.

```bash
# Add the NodeSource APT repository for Node 12
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash

# Install Node.js
sudo apt-get install -y nodejs

# Install pnpm
sudo npm install pnpm@latest -g
```

## Install LogChimp

### Install LogChimp Server

```bash
# Create the 'server' directory
sudo mkdir server && cd server

# Get the latest release tag name
LATEST_RELEASE_TAG=$(curl --silent "https://api.github.com/repos/logchimp/logchimp/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

# Download the LogChimp server to the current directory
sudo curl -L -o logchimp-server.tar.gz "https://api.github.com/repos/logchimp/logchimp/tarball/$LATEST_RELEASE_TAG"
```

After extracting the files to the current directory.

```bash
# Delete the zip file (optional)
sudo rm logchimp-server.tar.gz

# Install packages using pnpm
pnpm install
```

#### Configuration

Create the `logchimp.config.json` [configuration file](/docs/config) in the current directory using LogChimp CLI.

<Alert type="error">
  Use the same database name as you used above while creating the LogChimp configuration.
</Alert>

#### Running in the Background

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

To install the LogChimp default theme.

```bash
# Change to the user directory
cd /home/<user>

# Download the LogChimp theme
git clone "https://github.com/logchimp/theme" theme
```

Build the LogChimp theme

```bash
# Change to the theme directory
cd theme

# Install packages using pnpm
pnpm install

# Compile the LogChimp theme
pnpm build
```

To customize the build, you can download the source code directly from [GitHub](https://github.com/logchimp/theme).

<Alert type="tip">
  Check for the `dist` folder in the current directory.
</Alert>

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

## Add SSL Certificate to your Domain

You can either add your SSL certificate or create one for free by following these steps:

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx -y
```

Obtaining an SSL certificate

```bash
sudo certbot --nginx -d <your_domain>
```

<Alert type="warning">
  Enter the same domain name you used while creating the Nginx configuration.
</Alert>

Lastly, `certbot` will ask how you’d like to configure your HTTPS settings. Select `2` and hit `Enter`. The configuration will be updated, and Nginx will reload to pick up the new settings.

**🎉 Congrats!** You've successfully set up your own LogChimp site.
