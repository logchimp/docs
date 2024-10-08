---
title: Configuration
description: Step-by-step guide for configuring LogChimp site using `logchimp.config.json` file.
slug: /docs/config
---

import { Alert } from "../../src/components/Documentation/Alert.tsx"

## Overview

Some configuration options are pre-filled by default during the installation process via the [one-click deploy](/docs/install) button, while others need to be configured manually, such as secret credentials.

There are two ways to configure your LogChimp site:

1. Using the `logchimp.config.json` file
2. Using environment variables

<Alert type="tip">
Configuring your LogChimp site is a one-time task and is not required to be updated frequently, unless you're rotating your secret credentials.
</Alert>

## `logchimp.config.json` file

A custom configuration file must be a valid JSON file located in the root folder.

<Alert type="warning">
The configuration below is just an example and is not recommended for production use.
</Alert>

The two required options are `database` and `server`, which are configured during the installation process.

```json lines
{
  "database": {
    "host": "database.domain.com/postgresql",
    "user": "logchimp",
    "password": "password",
    "name": "logchimp-database",
    "port": 1001,
    "ssl": false
  },
  "server": {
    "port": 3000,
    "secretKey": "Diq1-Xir9"
  }
  // ...
}
```

### Mail

LogChimp uses SMTP connection for sending emails programmatically.

```json lines
{
  // ...
  "mail": {
    "service": "awesomeMail",
    "host": "smtp.domain.com",
    "user": "mail@sub-domain.domain.com",
    "password": "strong-password",
    "port": 587
  }
}
```

## Environment Variables

**SERVER**

- `LOGCHIMP_SECRET_KEY`: Railway provides an easy way to generate a 32-character secret key by pressing `Command + K` (on MacOS) or `Ctrl + K` (on Windows). Of course, you can provide your own secret key as well.
- `PORT`: Please do not change the pre-filled value.
- `LOGCHIMP`: This tells LogChimp to use environment variables instead of a [configuration file](/docs/config). Please do not change the pre-filled value.
- `LOGCHIMP_THEME_STANDALONE`: LogChimp allows you to run on a single port or split API and theme. If you're using the Railway deploy button, you can leave the value as `false`.

**DATABASE**

You can use your own PostgreSQL database or use the PostgreSQL plugin provided by Railway. If you're using the Railway database, you don't have to change the pre-filled values.

- `LOGCHIMP_DB_HOST`: Database host; defaults to `${{ PGHOST }}`
- `LOGCHIMP_DB_DATABASE`: Database name; defaults to `${{ PGDATABASE }}`
- `LOGCHIMP_DB_PORT`: Database port; defaults to `${{ PGPORT }}`
- `LOGCHIMP_DB_USER`: Database user; defaults to `${{ PGUSER }}`
- `LOGCHIMP_DB_PASSWORD`: Database password; defaults to `${{ PGPASSWORD }}`
- `LOGCHIMP_DB_SSL`: Database SSL; defaults to `true`

**MAIL**

You have to provide SMTP mail authentication details.

- `LOGCHIMP_MAIL_SERVICE`: Name of the email service provider
- `LOGCHIMP_MAIL_HOST`, `LOGCHIMP_MAIL_USER`, and `LOGCHIMP_MAIL_PASSWORD`
- `LOGCHIMP_MAIL_PORT`: SMTP port provided by the service provider; defaults to `587`

**Does LogChimp support SMTP connection URL?**

No, currently it's not supported. But you're most welcome to [submit a feature request](https://github.com/logchimp/logchimp) anytime.
