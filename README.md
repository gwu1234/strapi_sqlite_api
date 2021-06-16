# Strapi application

It is a demo how to setup api server from strapi server:

technologies includes:

CMS: strapi 

database: sqlite3

relational database with 5 tables: Category, Product, Image, Variance, and SKU 

## how to set admin password

yarn strapi admin:reset-user-password --email=<your email here> --password=<your password here>

## how to test 

start server: yarn start 

api:

http://localhost:1337/skus

http://localhost:1337/skus/1

http://localhost:1337/products

http://localhost:1337/products/1

http://localhost:1337/variances

http://localhost:1337/variances/1




