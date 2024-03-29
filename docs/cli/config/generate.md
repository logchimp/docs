---
title: logchimp config:generate
description: Generate a new configuration for a LogChimp instance.
slug: /docs/cli/config/generate
---

```bash
USAGE
  $ logchimp config:generate [flags]

EXAMPLES
  $ logchimp config:generate --force
  $ logchimp config:generate --dbhost=localhost --dbuser=username --dbname=database --dbport=5432
```

### Options

- `-f` or `--force` - Overwrite the existing configuration file if present
- `-i` or `--interactive` - Use interactive mode
- `--env` - Generate a `logchimp.config.json` file using environment variables

**Server**

- `--local` - Run LogChimp for local development/testing
- `--port=port` - [default: 3000] Server port to listen on
- `--secretKey=secretKey` - Secret key for password validation _(default auto-generates a random string)_

**Database**

- `--dbhost=dbhost` - Database host
- `--dbname=dbname` - Database name
- `--dbpass=dbpass` - Database password _(default auto-generates a random password)_
- `--dbport=dbport` - [default: 5432] Database port
- `--[no-]dbssl` - Enable SSL for the database _(default true for production)_
- `--dbuser=dbuser` - Database username

**Mail**

- `--mailhost=mailhost` - Mail service SMTP hostname
- `--mailpass=mailpass` - Mail service SMTP password _(default auto-generates a random password)_
- `--mailport=mailport` - [default: 587] Mail service SMTP port
- `--mailservice=mailservice` - Mail service e.g., MailGun
- `--mailuser=mailuser` - Mail service SMTP username
