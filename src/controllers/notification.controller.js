const httpStatus = require('http-status');
const notificationService = require('../services/notification.service');

const sendNotification = async (req, res) => {
  const payload = req.body;
  const { notificationProducer } = res.locals;

  const notification = await notificationService.create({
    ...payload,
    is_delivered: false,
  });

  const notificationPayload = [JSON.stringify(notification)];
  await notificationProducer.send(notificationPayload);

  delete notification.id;

  res.status(httpStatus.OK).send(notification);
};

const sendDummyNotification = async (req, res) => {
  const payload = req.body;
  const { notificationProducer } = res.locals;

  const notification = await notificationService.create({
    ...payload,
    is_testing: true,
    is_delivered: false,
  });

  const notificationPayload = [JSON.stringify(notification)];
  await notificationProducer.send(notificationPayload);

  delete notification.id;

  res.status(httpStatus.OK).send(notification);
};

const retryDelivery = async (req, res) => {
  const { customer_id } = req.body;
  const { notificationProducer } = res.locals;

  const notifications = await notificationService.findUndelivered(customer_id);

  const notificationPayload = notifications.map((notification) => JSON.stringify(notification));
  await notificationProducer.send(notificationPayload);

  const message = `[OK] Found ${notifications.length} undelivered notifications, sending...`;
  res.status(httpStatus.OK).send({ message });
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
