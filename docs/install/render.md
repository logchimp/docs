---
title: How to deploy LogChimp on Render?
slug: /docs/install/render
---

<!-- components -->

import Blockquote from "@/components/Blockquote"

A full guide for running LogChimp on Render with a click of a button.

## TOC

- v0.6

### v0.6

Clicking on "Deploy to Render" button will redirect you to confirmation page.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/logchimp/deploy-buttons)

![Render deploy confirmation page](/images/docs/render-deploy-confirmation.png)

<Blockquote type="tip">
  Please review the changes before deploying the following services.
</Blockquote>

Click "apply" button, 🎉 Voilà!

## Configuration

#### logchimp-api

Now, the deployed services needs to be connected together.

On your machine, you need to use logchimp-cli tool to [generate configuration](/docs/cli/config/generate).

In your Render dashboard, open **logchimp-api**, go to Environment tab, scroll to Secret Files section.

![Render services secret file section](/images/docs/render-secret-file-section.png)

Click "Add Secret File", at filename enter `logchimp.config.json`, paste the logchimp configuration in Contents.

![Render secret file contents preview](/images/docs/render-secret-file-content-preview.png)

Click "Save", scroll to top.

Copy the deployment url, for example `https://logchimp-api.onrender.com`.

### logchimp-client

You're doing great 💪, just one more step.

Open **logchimp-client**, go to Redriects/Rewrites tab.

Click "Add rule", enter `/api/*` as source, and paste your **logchimp-api** URL as destination `https://logchimp-api.onrender.com/api*`.

![Render services redirect section](/images/docs/render-services-redirect-section.png)

<Blockquote type="warning">
  Make sure /api/* source is at top
</Blockquote>

Click "Save Changes".
