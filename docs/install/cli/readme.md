---
title: CLI
---

A fully loaded tool to help you get LogChimp installed and configured.

The main aim of the LogChimp CLI is to make it possible to install LogChimp in a single command.

We understand that some users are going to want more flexibility, so the CLI has a whole set of flags and options that allow you to break the steps down and adjust what they do.

We hope you love using this new approach to tooling. If you have any suggestions or find bugs 🐞, head over to the [LogChimp CLI GitHub repository](https://github.com/logchimp/logchimp-cli) and let us know.

---

## Install

LogChimp CLI is an npm module that can be installed via either npm or yarn.

```bash
npm install -g logchimp-cli

# or
yarn global add logchimp-cli
```

### Useful options

There are some global flags you may find useful when using `logchimp-cli`.

```bash
# Output usage information for LogChimp CLI
logchimp --help, logchimp -h, logchimp help, logchimp [COMMAND] --help, logchimp help [COMMAND]

# Print LogChimp CLI version
logchimp version, logchimp --version, logchimp -V, logchimp -v
```

# Command list

Each command is documented in detail on its own page.

You can always run `logchimp --help` or `logchimp help [COMMAND]` to get more detail.

* [logchimp uninstall](/docs/install/cli/uninstall)
* [logchimp help](/docs/install/cli/help)
