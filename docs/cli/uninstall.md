---
title: uninstall
---

<!-- components -->

import Blockquote from "@/components/Blockquote"

Safely removes a LogChimp installation and all related configuration & data.

```bash
USAGE
  $ logchimp uninstall

OPTIONS
  -f, --force  Skip delete confirmation
```

Safely removes a LogChimp installation and all related configuration & data.

**Use with caution** - this command completely removes a LogChimp install along with all of its related data and config. There is no recovery from this if you have no backups.

The command `logchimp uninstall` must be executed in the directory containing the LogChimp instance that you would like to remove.

The following prompts appear:

```bash
› Warning: Running this command will delete all of your images, data, any files related to this LogChimp instance, and the contents of this folder!

? Are you sure you want to do this? (Y/n)
```

The following tasks are performed:

- Remove content folder
- Remove configuration files
- Remove LogChimp instance

<Blockquote type="warning">
  Running `logchimp uninstall -f` or `logchimp uninstall --force` will skip the warning and remove LogChimp without a prompt.
</Blockquote>
