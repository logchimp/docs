---
title: Install from Source
description: This guide is for installing a local development copy of LogChimp from source code, primarily for development purposes.
slug: /docs/install/source
---

import { Alert } from "../../../src/components/Documentation/Alert.tsx"

## Prerequisites

Before getting started, you'll need these global packages to be installed:

- [Node.js](https://nodejs.org/) (v12) - easiest way to install via [nvm](https://github.com/creationix/nvm#install-script)
- [Yarn](https://yarnpkg.com/en/docs/install#alternatives-tab) - to manage dependencies
- [PostgreSQL](#setup-postgresql-database) (v12) - postgres database

You can read more about engine requirements from [package.json](https://github.com/logchimp/logchimp/blob/master/package.json) on GitHub.

## Fork repository

First, you'll need to make a fork of the [LogChimp](https://github.com/logchimp/logchimp) repository. Click on the fork button right at the top, wait for a copy to be created over on your personal GitHub account, and you should be all set!

<Alert type="tip">
  You'll also need a LogChimp theme as client to intract with LogChimp APIs.
</Alert>

- LogChimp Core - https://github.com/logchimp/logchimp
- LogChimp default theme - https://github.com/logchimp/theme

## Install dependencies

```bash
yarn install
```

Once you run the command at the root repository, it will install all the required dependencies for [client and backend](/docs/architecture).

## Setup postgreSQL database

There are a few ways to set up a database.

- Download the [official Postgres package](https://www.postgresql.org/download/)
- Run a [postgres docker container](https://hub.docker.com/_/postgres)
- Use a remote or self-managed database

To spin up a database quickly and easily on your local machine, we recommend you to use the PostgreSQL docker image.

```bash
docker run -d \
  --name db \
  -p 5432 \
  -e POSTGRES_DB=$database_name \
  -e POSTGRES_USER=$database_user \
  -e POSTGRES_PASSWORD=$strong_password \
  postgres:12.4
```

Once you take down the Postgres Docker container all the data is also removed, to persist the data on your machine, you can add this line.

```bash
-v logchimp_db_data:/var/lib/postgresql/data
```

## Configuration file

<Alert type="warning">
  Starting from v0.4.0 `.env` has been replaced with `logchimp.config.json`.
</Alert>

Create a `logchimp.config.json` file in the root directory, which will contain all the [configuration](/docs/config) for the LogChimp site.

### Start LogChimp

You need two separate terminal windows to run the client and backend separately.

```bash
# in terminal 1 - to run logchimp core
yarn run dev

# in terminal 2 - to run logchimp theme
yarn run dev
```
