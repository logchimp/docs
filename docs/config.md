---
title: Configuration
slug: /docs/config
---

<!-- components -->
import Blockquote from "@/components/Blockquote"

Step by step guide for you to configure LogChimp site using `logchimp.config.json` file.

<Blockquote type="warning">
NOTE: The documentation is very new and may contain some gaps, please help us fill them in by opening issues or better yet, pull-requests when you think something could be explained better.
</Blockquote>

## Overview

A custom configuration file must be a valid JSON file located in the root folder. When you install LogChimp using [LogChimp CLI](/docs/cli), a configuration file is created with the options provided. There are some configuration options which are required by default, and few options configuration.

The two required options are `database` and `server` which are configurated during installation process.

In article explains about each configuration and its uses.

## Node environment

LogChimp supports three environments: **development**, **testing**, **production**. A public LogChimp site should always run in production mode, development is used for building LogChimp locally and testing is only used in CI/CD to run tests.

## Options

There are number of options which are explained in detail below.

<Blockquote type="alert">
The configuration below is just an example and not recommended for production use.
</Blockquote>

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

**Does LogChimp support SMPT connection URL?**

No, currently it's not supported. But you're most welcome to [submit a feature request](https://github.com/logchimp/logchimp) anytime.
