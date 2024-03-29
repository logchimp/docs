---
title: How to deploy LogChimp on Render?
description: A comprehensive guide for deploying LogChimp on Render with just a click.
slug: /docs/install/render
---

import { Alert } from "../../../src/components/Documentation/Alert.tsx"

## Table of Contents

- v0.6

## v0.6

Clicking the "Deploy to Render" button will redirect you to the Render blueprint confirmation page.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/logchimp/deploy-buttons)

![Render deploy confirmation page](../../images/docs/install/render/deploy-confirmation.png)

<Alert type="tip">
  Please review the changes before deploying the following services.
</Alert>

Click the "apply" button, 🎉 Voilà!

## Configuration

### logchimp-api

Now, the deployed services need to be connected.

![Deployed service](../../images/docs/install/render/services-deploy-preview.png)

On your machine, you need to use the logchimp-cli tool to [generate configuration](/docs/cli/config/generate).

In your Render dashboard, open **logchimp-api**, go to the Environment tab, and scroll to the Secret Files section.

![Render services secret file section](../../images/docs/install/render/secret-file-section.png)

Click "Add Secret File", at filename enter `logchimp.config.json`, paste the LogChimp configuration in Contents.

**NOTE:** It is required to enter SMTP credentials to receive emails. Without them, LogChimp may not function properly.

![Render secret file contents preview](../../images/docs/install/render/secret-file-content-preview.png)

Click "Save", scroll to the top.

Copy the deployment URL, for example, `https://logchimp-api.onrender.com`.

### logchimp-client

You're doing great 💪, just one more step.

Open **logchimp-client**, go to Redirects/Rewrites tab.

Click "Add rule", enter `/api/*` as the source, and paste your **logchimp-api** URL as the destination `https://logchimp-api.onrender.com/api*`.

![Render services redirect section](../../images/docs/install/render/services-redirect-section.png)

<Alert type="warning">
  Make sure /api/* source is at the top.
</Alert>

Click "Save Changes".
