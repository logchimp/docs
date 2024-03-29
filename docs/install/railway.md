---
title: How to deploy LogChimp on Railway?
description: Guide to deploying your LogChimp site successfully on Railway
slug: /docs/install/railway
---

import { Alert } from "../../../src/components/Documentation/Alert.tsx"

<Alert type="warning">
  By default, LogChimp will deploy directly from the `master` branch of [logchimp/logchimp](https://github.com/logchimp/logchimp). You can always create a [custom Railway template](https://railway.app/button) to deploy the required LogChimp version.
</Alert>

There are many ways to [install LogChimp](/docs/install). With Railway, you can get started with just a few easy steps. Click the button[^1], enter the environment variables, and hit deploy.

The first step is to deploy the LogChimp APIs, followed by the LogChimp Theme.

## APIs

Clicking "Deploy on Railway" will automatically provision a PostgreSQL database and deploy a LogChimp backend for you.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/3Bm-Un?referralCode=mittalyashu)

Enter the required environment variables and click **Deploy**.

**NOTE:** It is required to enter SMTP credentials to receive emails. Without them, LogChimp may not function properly.

![LogChimp Railway template](../../images/docs/install/railway/01_logchimp-railway-template.png)

Railway will automatically provision a PostgreSQL database and deploy the LogChimp API service for you.

![Railway deploys LogChimp server](../../images/docs/install/railway/02_deploy-logchimp-service.png)

## Theme

Now it's time to deploy the theme.

The theme is built as a generated SPA _(single-page application)_, making it easier to deploy on any CDN _(content delivery network)_.

- AWS Cloudfront
- Vercel
- Netlify
- [Render](/docs/install/render)

_Just to name a few..._

Here, we'll use Vercel as an example to deploy the theme. Feel free to choose any other option of your choice.

Go to Vercel dashboard and create a new project. Select the Git provider where you cloned the LogChimp repository using Railway.

![Railway template repository details](../../images/docs/install/railway/03_railway-template-repository-details.png)

Search with the same repository name used in Railway and click **import**.

![Vercel repository list page](../../images/docs/install/railway/04_vercel-select-repository-to-deploy.png)

There is no requirement for any configuration. Vercel will automatically detect the framework presets and apply base configuration for deployment.

![Vercel project configuration](../../images/docs/install/railway/05_vercel-project-configuration.png)

But feel free to look around and tweak the configuration accordingly and hit **Deploy**.

![Vercel theme deployment completed](../../images/docs/install/railway/06_vercel-theme-deployment-completed.gif)

The last step is to add an API rewrite for your client app in your source code by creating a new file `vercel.json` in the `packages/theme` directory.

```json lines
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://<subdomain>.up.railway.app/api/:path*"
    }
  ]
}
```

<Alert type="warning">
  Replace the part of the destination URL `https://<subdomain>.up.railway.app` with the LogChimp API URL from Railway.
</Alert>

And there you go... 🚄

Your LogChimp site is ready to accept **your customers' feedback** with ease.

![LogChimp live site preview](../../images/docs/install/railway/07_logchimp-live-site-preview.png)

## FAQ

### How to upload a custom Logo?

Currently, LogChimp doesn’t have integration with third-party services to upload images and only supports the filesystem. The default filesystem of Railway is ephemeral, meaning the data isn’t persisted across deploys and restarts.

The trick is to directly update the LogChimp site logo URL from the database. Upload your logo to any image hosting service (for example, AWS S3 bucket) and grab the image URL.

1. Go to the PostgreSQL database > Data tab > click the "settings" database table
   ![Open settings database table from Railway UI](../../images/docs/install/railway/settings-database-table.jpg)

2. Click on the first row in the "settings" table. That should open that row in edit mode.
   Paste the image URL you've copied and click the save button.
   ![Change logo URL from settings database table](../../images/docs/install/railway/change-logo-url-from-database.jpg)

[^1]: The above link contains a referral code which gives referral credits to [@mittalyashu](https://github.com/mittalyashu).
