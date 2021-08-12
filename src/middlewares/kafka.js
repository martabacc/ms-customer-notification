const { Kafka } = require('kafkajs');
const config = require('../config/config');

const createKafkaInstance = async () => {
  const kafka = new Kafka({
    clientId: config.kafka.clientId,
    brokers: config.kafka.brokerList,
    ssl: true,
    sasl: config.kafka.sasl,
  });

  const producer = kafka.producer();
  await producer.connect();

  return producer;
};

module.exports = createKafkaInstance;
