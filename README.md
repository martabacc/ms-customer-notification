# Technical assesment

[![Build Status](https://api.travis-ci.com/martabacc/ms-customer-notification.svg?branch=master&status=passed)](https://travis-ci.org/martabacc/ms-customer-notification)
[![Coverage Status](https://coveralls.io/repos/github/martabacc/ms-customer-notification/badge.svg?branch=master)](https://coveralls.io/github/martabacc/ms-customer-notification?branch=master)

Server dedicated for technical assesment

## Quick Start

```bash
git clone git@github.com:martabacc/ms-customer-notification.git

cd ms-customer-notification

yarn install
```

## Table of Contents

- [Features](#features)

## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Santizing**: sanitize request data against xss and query injection

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/node-boilerplate

# GITHUB_API_KEY
GITHUB_API_KEY=thisisasamplesecret

```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--app.js          # Express app
 |--index.js        # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:


```
PATCH /customer/{customer_id} to update detail of the customer (except keys)
POST /customer/{customer_id}/key to renew key for particular merchant
GET /customer/{customer_id}, getting details of a customer (callback url, keys)

POST /notification to post notifications
POST /notification/{customer_id}/test to post dummy notif to particular customer
POST /notification/{customer_id}/retry to retry failed notifications

```

## License

[MIT](LICENSE)
