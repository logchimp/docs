---
title: How to deploy LogChimp on Railway?
---

<!-- components -->

import Blockquote from "@/components/Blockquote"

Guide to know your LogChimp site successfully on Railway

<Blockquote type="alert">
  This uses `v0.7.0-beta.0` version.
</Blockquote>

There are many ways to [install LogChimp](/docs/install), with Railway, you can get started with 3 easy steps, click the button, enter environment variables and hit deploy. This will automatically provisioning a PostgreSQL database and deploy single instance of LogChimp for you.

Clicking "Deploy on Railway" will auto provision a PostgreSQL database, and deploy a LogChimp site for you.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Flogchimp%2Flogchimp&plugins=postgresql&envs=LOGCHIMP_SECRET_KEY%2CLOGCHIMP_DB_HOST%2CLOGCHIMP_DB_PORT%2CLOGCHIMP_DB_USER%2CLOGCHIMP_DB_PASSWORD%2CLOGCHIMP_DB_DATABASE%2CLOGCHIMP_DB_SSL%2CLOGCHIMP_MAIL_SERVICE%2CLOGCHIMP_MAIL_HOST%2CLOGCHIMP_MAIL_PORT%2CLOGCHIMP_MAIL_USER%2CLOGCHIMP_MAIL_PASSWORD%2CLOGCHIMP_SERVER_HOST%2CLOGCHIMP_THEME_STANDALONE%2CPORT%2CLOGCHIMP&optionalEnvs=LOGCHIMP_DB_PORT&LOGCHIMP_SECRET_KEYDesc=server.secretkey&LOGCHIMP_DB_HOSTDesc=database.host&LOGCHIMP_DB_PORTDesc=database.port&LOGCHIMP_DB_USERDesc=database.user&LOGCHIMP_DB_PASSWORDDesc=database.password&LOGCHIMP_DB_DATABASEDesc=database.name&LOGCHIMP_DB_SSLDesc=database.ssl+%28do+not+change+this+value%29&LOGCHIMP_MAIL_SERVICEDesc=mail.service&LOGCHIMP_MAIL_HOSTDesc=mail.host&LOGCHIMP_MAIL_PORTDesc=mail.port&LOGCHIMP_MAIL_USERDesc=mail.user&LOGCHIMP_MAIL_PASSWORDDesc=mail.password&LOGCHIMP_SERVER_HOSTDesc=server.host+%28do+not+change+this+value+unless+you+know+what+you%27re+doing%29&LOGCHIMP_THEME_STANDALONEDesc=theme.standalone+%28do+not+change+this+value%29&PORTDesc=same+as+server.port+%28do+not+change+this+value%29&LOGCHIMPDesc=tells+LogChimp+to+use+environment+variables&LOGCHIMP_DB_HOSTDefault=%24%7B%7B+PGHOST+%7D%7D&LOGCHIMP_DB_PORTDefault=%24%7B%7B+PGPORT+%7D%7D&LOGCHIMP_DB_USERDefault=%24%7B%7B+PGUSER+%7D%7D&LOGCHIMP_DB_PASSWORDDefault=%24%7B%7B+PGPASSWORD+%7D%7D&LOGCHIMP_DB_DATABASEDefault=%24%7B%7B+PGDATABASE+%7D%7D&LOGCHIMP_DB_SSLDefault=true&LOGCHIMP_MAIL_PORTDefault=587&LOGCHIMP_SERVER_HOSTDefault=%24%7B%7B+RAILWAY_STATIC_URL+%7D%7D&LOGCHIMP_THEME_STANDALONEDefault=false&PORTDefault=8080&LOGCHIMPDefault=1&referralCode=mittalyashu)

_Disclaimer: The above link contains a referral code which gives referral credits to [@mittalyashu](https://github.com/mittalyashu)._

## Environment variables

To get most of LogChimp, you can customise using environment variables.

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

You can even attach a **[custom domain](https://docs.railway.app/deployment/custom-domains)** to your LogChimp site.

1. Go to variables page and click on edit button from dropdown for the environment variable of `LOGCHIMP_SERVER_HOST`.
   ![Edit server_host env variable](/images/docs/install/railway/edit-server-host-env.jpg)

2. Enter your custom domain and click on checkmark icon.
   ![change to custom domain](/images/docs/install/railway/change-to-custom-domain.jpg)

> 🚨 Make sure to prefix `https://` protocol before your custom domain.

## Demo

You can take a look at this demo deployment at: [https://logchimp-production.up.railway.app](https://logchimp-production.up.railway.app/).

<Blockquote type="warning">
  New sign up has been disabled from this demo site to protect from spam and abuse.
</Blockquote>

![deployment preview](/images/docs/install/railway/deployment-preview.jpg)

## Conclusion

And with that you should have all the information you need to set up LogChimp on Railway. You should be able to accept your customers feedback with ease.
