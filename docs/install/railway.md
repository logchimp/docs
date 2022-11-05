---
title: How to deploy LogChimp on Railway?
slug: /docs/install/railway
---

<!-- components -->

import Blockquote from "@/components/Blockquote"

Guide to know your LogChimp site successfully on Railway

<Blockquote type="alert">
  This uses `v0.7.0-beta.0` version.
</Blockquote>

There are many ways to [install LogChimp](/docs/install), with Railway, you can get started with few easy steps, click the button, enter environment variables and hit deploy.

The first step is to deploy the LogChimp APIs followed by LogChimp Theme.

## APIs

Clicking "Deploy on Railway" will auto provision a PostgreSQL database, and deploy a LogChimp backend for you.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/3Bm-Un?referralCode=mittalyashu)

_Disclaimer: The above link contains a referral code which gives referral credits to [@mittalyashu](https://github.com/mittalyashu)._

## Environment variables

Enter the required environment variables and click **Deploy**.

> 💡 Don't want to deal with environment variables? You can configure LogChimp using `logchimp.config.json` file, you can read more about it [here](/docs/config).

**SERVER**

- `LOGCHIMP_SECRET_KEY`: Railway provides an easy way to generate 32-char secret key, by pressing `Command + K` (on MacOS) or `Ctrl + K` (on windows). Of course, you can provide your own secret key as well.
- `PORT`: Please do not change the pre-filled value.
- `LOGCHIMP`: This tells LogChimp to use environment variables instead of [configuration file](/docs/config). Please do not change the pre-filled value.
- `LOGCHIMP_THEME_STANDALONE`: LogChimp allows you to run on single port or split API and theme. If you're using Railway deploy button, you can leave the value to `false`.

**DATABASE**

You can use your own PostgreSQL database or use PostgreSQL plugin provided by Railway. If you're using Railway plugin, you don't have to change the pre-filled values.

- `LOGCHIMP_DB_HOST`: Database host; default to `${{ PGHOST }}`
- `LOGCHIMP_DB_DATABASE`: Database name; default to `${{ PGDATABASE }}`
- `LOGCHIMP_DB_PORT`: Database port; default to `${{ PGPORT }}`
- `LOGCHIMP_DB_USER`: Database user; default to `${{ PGUSER }}`
- `LOGCHIMP_DB_PASSWORD`: Database password; default to `${{ PGPASSWORD }}`
- `LOGCHIMP_DB_SSL`: Database SSL; default to `true`

**MAIL**

You've have to provide SMPT mail authentication details.

- `LOGCHIMP_MAIL_SERVICE`: Name of the email service provider
- `LOGCHIMP_MAIL_HOST`, `LOGCHIMP_MAIL_USER`, and `LOGCHIMP_MAIL_PASSWORD`
- `LOGCHIMP_MAIL_PORT`: SMPT port provided by the service provider; default to `587`

![LogChimp Railway template](/images/docs/install/railway/01_logchimp-railway-template.png)

Railway will automatically provisioning a PostgreSQL database and deploy LogChimp API service for you.

![Railway deploy LogChimp server](/images/docs/install/railway/02_deploy-logchimp-service.png)

## Theme

Now its time to deploy the theme.

The theme is build as a generated SPA _(single page application)_, making it easier to deploy on any CDN _(content delivery network)_.

- AWS Cloudfront
- Vercel
- Netlify
- [Render](/docs/install/render)

_Just to name a few..._

Here we'll use Vercel as an example to deploy the theme. Feel free to choose any other option of your choice.

Go to vercel dashboard and create a new project, select the git provider where you cloned the LogChimp repository using Railway.

![Railway template repository details](/images/docs/install/railway/03_railway-template-repository-details.png)

Search with the same repository name as used in Railway and click **import**.

![Vercel select repository to deploy](/images/docs/install/railway/04_vercel-select-repository-to-deploy.png)

There is no requirement for any configuration. Vercel will automatically detech the framework presets and apply base configuration for deploying.

![Vercel project configuration](/images/docs/install/railway/05_vercel-project-configuration.png)

But feel free to look around and tweak the configuration accordingly and hit **Deploy**.

![Vercel theme deployment completed](/images/docs/install/railway/06_vercel-theme-deployment-completed.gif)

The last step is to add a API rewrite for your client app, in your source code by create a new file `vercel.json` in `packages/theme` directory.

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://<subdomain>.up.railway.app/api/:path*"
    }
  ]
}
```

and there you go... 🚄

Your LogChimp site is ready to accept **your customers feedback** with ease.

![LogChimp live site preview](/images/docs/install/railway/07_logchimp-live-site-preview.png)

## FAQ

### How to upload custom Logo?

Currently, LogChimp doesn’t have integration with third-party services to upload images and only support filesystem and the default filesystem of Railway is ephemeral, meaning the data isn’t persisted across deploys and restarts.

The trick is to directly update the LogChimp site logo URL directly from database, upload your logo to any image hosting service (for example, AWS S3 bucket), and grab the image url.

1. Go to PostgreSQL plugin > Data tab > click "settings" database table
   ![Open settings database table from Railway UI](/images/docs/install/railway/settings-database-table.jpg)

2. Click on the first row in "settings" table, that should open that row in edit mode
   Paste the image url you've copied and click the save button.
   ![Change logo URL from settings database table](/images/docs/install/railway/change-logo-url-from-database.jpg)

### How to add custom domain?

You can attach a custom domain to your LogChimp site.

The process of assigning custom domain can vary upon the platform where you're deploying the LogChimp theme.

## Conclusion

And with that you should have all the information you need to set up LogChimp on Railway. You should be able to accept your customers feedback with ease.
