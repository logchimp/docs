---
title: How to deploy LogChimp on Railway?
description: Guide to know your LogChimp site successfully on Railway
slug: /docs/install/railway
---

import { Alert } from "../../../src/components/Documentation/Alert.tsx"

<Alert type="error">
  This uses `v0.7.0-beta.0` version.
</Alert>

There are many ways to [install LogChimp](/docs/install), with Railway, you can get started with 3 easy steps, click the button, enter environment variables and hit deploy. This will automatically provisioning a PostgreSQL database and deploy single instance of LogChimp for you.

Clicking "Deploy on Railway" will auto provision a PostgreSQL database, and deploy a LogChimp site for you.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/3Bm-Un?referralCode=mittalyashu)

_Disclaimer: The above link contains a referral code which gives referral credits to [@mittalyashu](https://github.com/mittalyashu)._

## FAQ

### How to upload custom Logo?

Currently, LogChimp doesn’t have integration with third-party services to upload images and only support filesystem and the default filesystem of Railway is ephemeral, meaning the data isn’t persisted across deploys and restarts.

The trick is to directly update the LogChimp site logo URL directly from database, upload your logo to any image hosting service (for example, AWS S3 bucket), and grab the image url.

1. Go to PostgreSQL plugin > Data tab > click "settings" database table
	![Open settings database table from Railway UI](../../images/docs/install/railway/settings-database-table.jpg)

2. Click on the first row in "settings" table, that should open that row in edit mode
	Paste the image url you've copied and click the save button.
	![Change logo URL from settings database table](../../images/docs/install/railway/change-logo-url-from-database.jpg)

### How to add custom domain?

You can even attach a **[custom domain](https://docs.railway.app/deployment/custom-domains)** to your LogChimp site.

1. Go to variables page and click on edit button from dropdown for the environment variable of `LOGCHIMP_SERVER_HOST`.
	![Edit server_host env variable](../../images/docs/install/railway/edit-server-host-env.jpg)

2. Enter your custom domain and click on checkmark icon.
	![change to custom domain](../../images/docs/install/railway/change-to-custom-domain.jpg)

	<Alert type="warning">
		Make sure to prefix `https://` protocol before your custom domain.
	</Alert>

## Demo

You can take a look at this demo deployment at: [https://logchimp-production.up.railway.app](https://logchimp-production.up.railway.app/).

<Alert type="warning">
  New sign up has been disabled from this demo site to protect from spam and abuse.
</Alert>

![deployment preview](../../images/docs/install/railway/deployment-preview.jpg)

## Conclusion

And with that you should have all the information you need to set up LogChimp on Railway. You should be able to accept your customers feedback with ease.
