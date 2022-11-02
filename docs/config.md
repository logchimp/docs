---
title: Configuration
description: Step by step guide for you to configure LogChimp site using `logchimp.config.json` file.
slug: /docs/config
---

import { Alert } from "../../src/components/Documentation/Alert.tsx"

<Alert type="tip" title="Help us improve!">
**NOTE:** The documentation is very new and may contain some gaps, please help us fill them in by opening issues or better yet, pull-requests when you think something could be explained better.
</Alert>

## Overview

A custom configuration file must be a valid JSON file located in the root folder. When you install LogChimp using [LogChimp CLI](/docs/cli), a configuration file is created with the options provided. There are some configuration options which are required by default, and few options configuration.

The two required options are `database` and `server` which are configurated during installation process.

In article explains about each configuration and its uses.

## Options

There are number of options which are explained in detail below.

<Alert type="error">
The configuration below is just an example and not recommended for production use.
</Alert>

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
  },
  // ...
}
```

### Mail

LogChimp uses SMPT connection for sending emails programmatically.

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

## Environment variables

**SERVER**

- `LOGCHIMP_SECRET_KEY`: Railway provides an easy way to generate 32-char secret key, by pressing `Command + K` (on MacOS) or `Ctrl + K` (on windows). Of course, you can provide your own secret key as well.
- `PORT`: Please do not change the pre-filled value.
- `LOGCHIMP`: This tells LogChimp to use environment variables instead of [configuration file](/docs/config). Please do not change the pre-filled value.
- `LOGCHIMP_THEME_STANDALONE`: LogChimp allows you to run on single port or split API and theme. If you're using Railway deploy button, you can leave the value to `false`.

**DATABASE**

You can use your own PostgreSQL database or use PostgreSQL plugin provided by Railway. If you're using Railway plugin, you don't have to change the pre-filled values.

- `LOGCHIMP_DB_HOST`: Database host; default to `${{ PGHOST }}`
- `LOGCHIMP_DB_DATABASE`: Database name; default to `${{ PGDATABASE }}`
- `LOGCHIMP_DB_PORT`: Database port; default to `${{ PGPORT }}`
- `LOGCHIMP_DB_USER`: Database user; default to `${{ PGUSER }}`
- `LOGCHIMP_DB_PASSWORD`: Database password; default to `${{ PGPASSWORD }}`
- `LOGCHIMP_DB_SSL`: Database SSL; default to `true`

**MAIL**

You've have to provide SMPT mail authentication details.

- `LOGCHIMP_MAIL_SERVICE`: Name of the email service provider
- `LOGCHIMP_MAIL_HOST`, `LOGCHIMP_MAIL_USER`, and `LOGCHIMP_MAIL_PASSWORD`
- `LOGCHIMP_MAIL_PORT`: SMPT port provided by the service provider; default to `587`

**Does LogChimp support SMPT connection URL?**

No, currently it's not supported. But you're most welcome to [submit a feature request](https://github.com/logchimp/logchimp) anytime.
