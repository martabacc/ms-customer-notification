const createKafkaInstance = require('./kafka');
const config = require('../config/config');

const createProducer = async (err, req, res, next) => {
  const producer = createKafkaInstance();

  const notificationProducer = {
    send: (payload) =>
      producer.send({
        topic: config.kafka.topics.notification,
        messages: [{ value: payload }],
      }),
  };

  Object.assign(res.locals, { notificationProducer });
  next();
};

module.exports = createProducer;
