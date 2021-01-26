---
title: logchimp install
---

<!-- components -->
import Blockquote from "@/components/Blockquote"

The `logchimp install` command is your one-stop-shop to get a running production install of LogChimp.

```bash
USAGE
  $ logchimp install [flags]

OPTIONS
  --dbhost=dbhost        [default: localhost] Database host
  --dbname=dbname        Database name
  --dbpass=dbpass        Database password (default auto generate random password)
  --dbport=dbport        [default: 5432] Database port
  --[no-]dbssl           Enable SSL for database (default true for production)
  --dbuser=dbuser        Database username
  --local                Run LogChimp for local development/testing
  --port=port            [default: 3000] Server port to listen on
  --secretkey=secretkey  Secret key for password validation (default auto generate random string)

EXAMPLES
  $ logchimp install
  $ logchimp install --local
  $ logchimp install --dbhost=localhost --dbuser=username --dbname=database --dbport=5432
```

The `logchimp install` command is your one-stop-shop to get a running production install of LogChimp.

<Blockquote type="tip">
  Not ready for production yet? `logchimp install --local` installs LogChimp in development mode.
</Blockquote>

### How it works

The `logchimp install` command runs a nested command structure, but you only ever have to enter a single command.

First, it will download the LogChimp source code, install its dependencies, and build the client for production.

Ta-da 🎉 a single command has successfully installed LogChimp.

## Arguments

Here are some useful options when using the LogChimp install command:

```bash
# Install locally for development/testing
logchimp install --local
```

##### Options

As `logchimp install` runs it also accepts options for database configuration.

See the individual command docs, or run `logchimp install --help` for more detailed information.

```bash
# Get more information before running the command
logchimp install --help

# Install in development mode for a staging env
logchimp install --local
```
