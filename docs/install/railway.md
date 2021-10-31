---
title: How to deploy LogChimp on Railway?
---

<!-- components -->

import Blockquote from "@/components/Blockquote"

Guide to know your LogChimp site successfully on Railway

<Blockquote type="alert">
  This uses `v0.7.0-beta.0` version.
</Blockquote>

Clicking "Deploy on Railway" will auto provision a PostgreSQL database, additonally you need to manually provide environment variable for private secret key and SMPT configuration.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Flogchimp%2Flogchimp&plugins=postgresql&envs=LOGCHIMP_SECRET_KEY%2CLOGCHIMP_DB_HOST%2CLOGCHIMP_DB_PORT%2CLOGCHIMP_DB_USER%2CLOGCHIMP_DB_PASSWORD%2CLOGCHIMP_DB_DATABASE%2CLOGCHIMP_DB_SSL%2CLOGCHIMP_MAIL_SERVICE%2CLOGCHIMP_MAIL_HOST%2CLOGCHIMP_MAIL_PORT%2CLOGCHIMP_MAIL_USER%2CLOGCHIMP_MAIL_PASSWORD%2CLOGCHIMP_SERVER_HOST%2CLOGCHIMP_THEME_STANDALONE%2CPORT%2CLOGCHIMP&optionalEnvs=LOGCHIMP_DB_PORT&LOGCHIMP_SECRET_KEYDesc=server.secretkey&LOGCHIMP_DB_HOSTDesc=database.host&LOGCHIMP_DB_PORTDesc=database.port&LOGCHIMP_DB_USERDesc=database.user&LOGCHIMP_DB_PASSWORDDesc=database.password&LOGCHIMP_DB_DATABASEDesc=database.name&LOGCHIMP_DB_SSLDesc=database.ssl+%28do+not+change+this+value%29&LOGCHIMP_MAIL_SERVICEDesc=mail.service&LOGCHIMP_MAIL_HOSTDesc=mail.host&LOGCHIMP_MAIL_PORTDesc=mail.port&LOGCHIMP_MAIL_USERDesc=mail.user&LOGCHIMP_MAIL_PASSWORDDesc=mail.password&LOGCHIMP_SERVER_HOSTDesc=server.host+%28do+not+change+this+value+unless+you+know+what+you%27re+doing%29&LOGCHIMP_THEME_STANDALONEDesc=theme.standalone+%28do+not+change+this+value%29&PORTDesc=same+as+server.port+%28do+not+change+this+value%29&LOGCHIMPDesc=tells+LogChimp+to+use+environment+variables&LOGCHIMP_DB_HOSTDefault=%24%7B%7B+PGHOST+%7D%7D&LOGCHIMP_DB_PORTDefault=%24%7B%7B+PGPORT+%7D%7D&LOGCHIMP_DB_USERDefault=%24%7B%7B+PGUSER+%7D%7D&LOGCHIMP_DB_PASSWORDDefault=%24%7B%7B+PGPASSWORD+%7D%7D&LOGCHIMP_DB_DATABASEDefault=%24%7B%7B+PGDATABASE+%7D%7D&LOGCHIMP_DB_SSLDefault=true&LOGCHIMP_MAIL_PORTDefault=587&LOGCHIMP_SERVER_HOSTDefault=%24%7B%7B+RAILWAY_STATIC_URL+%7D%7D&LOGCHIMP_THEME_STANDALONEDefault=false&PORTDefault=8080&LOGCHIMPDefault=1&referralCode=mittalyashu)
