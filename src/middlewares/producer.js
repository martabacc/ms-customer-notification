const createKafkaInstance = require('./kafka');
const config = require('../config/config');

const createProducer = async (req, res, next) => {
  const producer = await createKafkaInstance();

  const notificationProducer = {
    send: (payload) =>
      producer.send({
        topic: config.kafka.topics.notification,
        messages: [{ value: payload }],
      }),
  };

  Object.assign(res.locals, { notificationProducer });

  return next();
};

module.exports = createProducer;
