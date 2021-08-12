const httpStatus = require('http-status');
const notificationService = require('../services/notification.service');

const sendNotification = async (req, res) => {
  const payload = req.body;
  const { producer } = res.locals;

  const notification = await notificationService.create({
    ...payload,
    is_delivered: false,
  });

  await producer.send(JSON.stringify(notification));

  delete notification.id;

  res.status(httpStatus.OK).send(notification);
};

const sendDummyNotification = async (req, res) => {
  const payload = req.body;

  const notification = await notificationService.create({
    ...payload,
    is_testing: true,
  });

  delete notification.id;

  res.status(httpStatus.OK).send(notification);
};

const retryDelivery = async (req, res) => {
  const { customer_id } = req.body;

  const notification = await notificationService.findUndelivered(customer_id);

  res.status(httpStatus.OK).send(notification);
};

const update = async (req, res) => {
  const { notification_id } = req.params;
  const payload = req.body;

  const notification = await notificationService.update({ notification_id }, payload);

  res.status(httpStatus.OK).send(notification);
};

module.exports = {
  update,
  retryDelivery,
  sendNotification,
  sendDummyNotification,
};
