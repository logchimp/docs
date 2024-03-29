---
title: Install from Source
description: This guide is for installing a local development copy of LogChimp from the source code, primarily for development purposes.
slug: /docs/install/source
---

import { Alert } from "../../../src/components/Documentation/Alert.tsx"

## Prerequisites

Before getting started, you'll need these global packages installed:

- [Node.js](https://nodejs.org/) (v12) - the easiest way to install is via [nvm](https://github.com/creationix/nvm#install-script)
- [pNpm](https://pnpm.io/) - for managing dependencies
- [PostgreSQL](#setup-postgresql-database) (v12) - PostgreSQL database

You can read more about the engine requirements from the [package.json](https://github.com/logchimp/logchimp/blob/master/package.json) on GitHub.

## Fork repository

First, you'll need to make a fork of the [LogChimp](https://github.com/logchimp/logchimp) repository. Click on the fork button at the top right, wait for a copy to be created on your personal GitHub account, and you should be all set!

<Alert type="tip">
  You'll also need a LogChimp theme as a client to interact with LogChimp APIs.
</Alert>

- LogChimp Core APIs - https://github.com/logchimp/logchimp/tree/master/packages/server
- LogChimp default theme (including dashboard) - https://github.com/logchimp/logchimp/tree/master/packages/theme

## Install dependencies

```bash
pnpm install
```

Once you run the command at the root of the repository, it will install all the required dependencies for the [client and backend](/docs/architecture).

## Setup PostgreSQL database

There are a few ways to set up a database:

- Download the [official Postgres package](https://www.postgresql.org/download/)
- Run a [Postgres Docker container](https://hub.docker.com/_/postgres)
- Use a remote or self-managed database

To spin up a database quickly and easily on your local machine, we recommend using the PostgreSQL Docker image.

```bash
docker run -d \
  --name db \
  -p 5432 \
  -e POSTGRES_DB=$database_name \
  -e POSTGRES_USER=$database_user \
  -e POSTGRES_PASSWORD=$strong_password \
  postgres:12.4
```

Once you take down the Postgres Docker container, all the data is also removed. To persist the data on your machine, you can add this line.

```bash
-v logchimp_db_data:/var/lib/postgresql/data
```

## Configuration file

<Alert type="warning">
  Starting from v0.4.0, `.env` has been replaced with `logchimp.config.json`.
</Alert>

Create a `logchimp.config.json` file in the root directory, which will contain all the [configuration](/docs/config) for the LogChimp site.

### Start LogChimp

You need two separate terminal windows to run the client and backend separately.

```bash
# in terminal 1 - to run LogChimp core
cd ./packages/server
pnpm run dev

# in terminal 2 - to run LogChimp theme
cd ./packages/theme
pnpm run dev
```
