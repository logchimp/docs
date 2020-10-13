---
title: Install from Source
description: This guide is for installing a local development copy of LogChimp from source code, primarily for the development purposes
---

### Prerequisites

Before getting started, you'll need these global packages to be installed:

* [Node.js](https://nodejs.org/) (v12) - easiest way to install via [nvm](https://github.com/creationix/nvm#install-script)
* [Yarn](https://yarnpkg.com/en/docs/install#alternatives-tab) - to manage all the packages

### Fork repository

First, you'll need to make a fork of the [LogChimp](https://github.com/logchimp/logchimp) repository. Click on the fork button right at the top, wait for a copy to be created over on your personal GitHub account, and you should be all set!


### Install dependencies

```bash
yarn install
```

Once you will run the command at the root of the repository, it will install all the required dependencies for both [frontend and backend](/docs/architecture).

### Setup postgreSQL database

There are two ways to set up a local development.

1. Download the [official Postgres package](https://www.postgresql.org/download/)
2. Run a [postgres docker container](https://hub.docker.com/_/postgres)
3. Use a remote or self-managed database

You can choose any option you prefer. Just make sure, you are running a Postgres database on [v12](https://www.postgresql.org/docs/12/release-12-4.html).

To set up a database quickly and easily, we suggest you run a Postgres docker container.

```bash
docker run -d \
  --name db \
  -p 5000:5432 \
  -e POSTGRES_DB=database_name \
  -e POSTGRES_USER=database_user \
  -e POSTGRES_PASSWORD=strong_password \
  postgres:12.4
```

Once you take down the Postgres Docker container all the data is also removed, to persist the data on your machine, you can add this line.

```bash
-v logchimp_db_data:/var/lib/postgresql/data
```

### Environment variables

At the root of the repository, you will find a file name `.env.example`, rename the file to `.env`, and update the values of the variables.

**For example**

```.env
# node environment
NODE_ENV="development"

# database
PG_USER=database_user
PG_HOST=localhost
PG_DATABASE=database_name
PG_PORT=5000
PG_PASSWORD=strong_password
```

Create another `.env` file inside `frontend` directory and replace `$SERVER_PORT` with port number the backend is running on.

```.env
# client
VUE_APP_SEVER_URL="http://localhost:$SERVER_PORT"
```

> Creating two `.env` is not really a best option. We've created an [issue](https://github.com/logchimp/logchimp/issues/99) to ask other developers for help on that.

### Start LogChimp

You need two separate terminal windows to run frontend and backend.

```bash
# in terminal 1
yarn run frontend:dev

# in terminal 2
yarn run server:dev
```
