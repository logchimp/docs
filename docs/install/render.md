---
title: How to deploy LogChimp on Render?
---

<!-- components -->
import Blockquote from "@/components/Blockquote"

A full guide for running LogChimp on Render with a click of a button.

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

On your machine, we'll use logchimp-cli tool to [generate configuration](/docs/cli/config/generate).

In services page, open **logchimp-api**, go to Environment tab, scroll to Secret Files section.

![Render services secret file section](/images/docs/render-secret-file-section.png)

Click "Add Secret File", at filename enter `logchimp.config.json`, paste the logchimp configuration in Contents.

![Render secret file contents preview](/images/docs/render-secret-file-content-preview.png)

Click "Save", scroll to top.

Copy the deployment url, for example `https://logchimp-api.onrender.com`.

### logchimp-client

You're doing great 💪, just one more step.

Open **logchimp-client**, go to Redriects/Rewrites tab.

![Render services redirect section](/images/docs/render-services-redirect-section.png)

Click "Add rule", at source enter `/api/*` paste your **logchimp-api** deployment url.

![Render services redirect API at top](/images/docs/render-services-redirect-api.png)

<Blockquote type="warning">
  Make sure /api/* source is at top
</Blockquote>

Click "Save Changes".
