# Technical assesment

[![Build Status](https://api.travis-ci.com/martabacc/ms-customer-notification.svg?branch=master&status=passed)](https://travis-ci.org/martabacc/ms-customer-notification)
[![Coverage Status](https://coveralls.io/repos/github/martabacc/ms-customer-notification/badge.svg?branch=master)](https://coveralls.io/github/martabacc/ms-customer-notification?branch=master)

Server dedicated for technical assesment

## Quick Start

```bash
git clone git@github.com:martabacc/ms-customer-notification.git

cd ms-customer-notification

npm run install
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
- **Dependency management**: with npm
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Santizing**: sanitize request data against xss and query injection

## Commands

Running locally:

```bash
npm run dev
```

Running in production:

```bash
npm run start
```

Testing:

```bash
# run all tests
npm run test

# run all tests in watch mode
npm run test:watch

# run test coverage
npm run coverage
```

Docker:

```bash
# run docker container in development mode
npm run docker:dev

# run docker container in production mode
npm run docker:prod

# run all tests in a docker container
npm run docker:test
```

Linting:

```bash
# run ESLint
npm run lint

# fix ESLint errors
npm run lint:fix

# run prettier
npm run prettier

# fix prettier errors
npm run prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
HOST_PATH=0.0.0.0
PORT=3000
NODE_ENV=development

# URL of the Mongo DB
MONGODB_URL=mongodb://host:port/db_name

# KAFKA DETAILS
KAFKA_BROKER_LIST=abc:9093,abc:9094,abc:9095
KAFKA_PRODUCER_USERNAME=username
KAFKA_PRODUCER_PASSWORD=password
KAFKA_NOTIFICATION_TOPIC_NAME=notification
KAFKA_CLIENT_ID=ms-customer-notification-test
KAFKA_PROTOCOL=SASL_SSL
KAFKA_PROTOCOL_MECHANISM=SCRAM-SHA-256
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
GET /customer/{customer_id}, getting customer data (use by internal call/worker)
POST /customer, to create customer, testing purpose only

POST /notification to post notifications
PATCH /notification/{notification_id} to update particular notification
POST /notification/{customer_id}/test to post dummy notif to particular customer
POST /notification/{customer_id}/retry to retry failed notifications

```

## License

[MIT](LICENSE)
