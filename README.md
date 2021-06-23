# Strapi application

It is a demo how to setup api server from strapi server and how to create email plugin:

technologies includes:

CMS: strapi 

database: sqlite3

relational database with 5 tables: Category, Product, Image, Variance, and SKU

Email Server: 

sendGrid

## how to set admin password

yarn strapi admin:reset-user-password --email="your email here" --password="your password here"


## email plugins

### install sendgrid module

yarn add strapi-provider-email-sendgrid

### define env vaiable for mail server api key 

at config/env/development

module.exports = {
   SENDGRID_API_KEY : "your email key  here"
};

### define email plugin

at config/plugins.js

module.exports = ({ env }) => ({

      email: {

        provider: 'sendgrid',

        providerOptions: {

          apiKey: apiKey: env('SENDGRID_API_KEY'),
        },

      settings: {

        defaultFrom: 'info@shopping.net',

        defaultReplyTo: 'guoping@shopping.com',

        testAddress: 'guoping@shopping.com',

      },

    }

  });


## how to test 

start server: yarn start 

api:

http://localhost:1337/skus

http://localhost:1337/skus/1

http://localhost:1337/products

http://localhost:1337/products/1

http://localhost:1337/variances

http://localhost:1337/variances/1

http://localhost:1337/email





