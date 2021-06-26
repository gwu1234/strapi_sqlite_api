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

## deployment

this app is deployed at Heroku cloud: https://strapi-graphql-api.herokuapp.com

## test at localhost 

start server: yarn start 

start graphql playground: localhost:1337/graphql

## test with Heroku server 

url: https://strapi-graphql-api.herokuapp.com/graphql

tool: postman

method: POST

body; graphQl

### testing email on Heroku server 

url: https://strapi-graphql-api.herokuapp.com/email

path: email/:to/:subject/:text, method: GET

to send email to guoping.wu@gmail.com, subject is 'Hello Guoping", text is 'hody, guoping'

at Postman 

send a GET to 

https://strapi-graphql-api.herokuapp.com/email/guoping.wu@gmail.com/Hello Guoping/hody, guoping



### query all sku

query {

  skus {

    id

    name

    product {

      id

      name
      
    }
  }

}



### query all product

query {

  products {

    id

    name

    category {

      id

      name

    }

  }

}

### query a category by its id

query {

  category (id: 1) {

    id

    name

    products {

       id

       name

    }

  }

}

### query a product by its id

query {

  product(id: 2) {

    id

    name

    category {

       id

       name

    }

  }

}

### query a sku by its id

query {

  sku(id: 1) {

    id

    name

    product {

       id

       name

    }

  }

}

### mutation: create a new product 

mutation {

  createProduct(input:{data: {

        name: "fishing vest"

        description: "good fabric, super cool design"

        category: "1"

  }}) {

      product {

         id

    }

  }
  
}








