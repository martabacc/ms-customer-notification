const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    HOST: Joi.string().required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    KAFKA_BROKER_LIST: Joi.string().required(),
    KAFKA_PROTOCOL_MECHANISM: Joi.string().required(),
    KAFKA_PROTOCOL: Joi.string().required(),
    KAFKA_PRODUCER_USERNAME: Joi.string().required(),
    KAFKA_PRODUCER_PASSWORD: Joi.string().required(),
    KAFKA_NOTIFICATION_TOPIC_NAME: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  host: envVars.HOST,
  mongoose: {
    url: envVars.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  kafkaConfluent: {
    brokerList: envVars.KAFKA_BROKER_LIST,
    mechanism: envVars.KAFKA_PROTOCOL_MECHANISM,
    protocol: envVars.KAFKA_PROTOCOL,
    credentials: {
      producerUsername: envVars.KAFKA_PRODUCER_USERNAME,
      producerPassword: envVars.KAFKA_PRODUCER_PASSWORD,
    },
    topics: {
      notification: envVars.KAFKA_NOTIFICATION_TOPIC_NAME,
    },
  },
};
