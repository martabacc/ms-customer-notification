const createKafkaInstance = require('./kafka');
const config = require('../config/config');

const createProducer = async (req, res, next) => {
  const producer = await createKafkaInstance();

  const notificationProducer = {
    send: (notifications) =>
      producer.send({
        topic: config.kafka.topics.notification,
        messages: notifications.map((payload) => ({ value: payload })), // note that messages receives array!
      }),
  };

  Object.assign(res.locals, { notificationProducer });

  return next();
};

module.exports = createProducer;
