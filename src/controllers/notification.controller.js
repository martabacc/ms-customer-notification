const httpStatus = require('http-status');
const notificationService = require('../services/notification.service');

const sendNotification = async (req, res) => {
  const payload = req.body;

  const notification = await notificationService.create({
    ...payload,
    is_delivered: false,
  });

  res.status(httpStatus.OK).send(notification);
};

const sendDummyNotification = async (req, res) => {
  const payload = req.body;

  const notification = await notificationService.create({
    ...payload,
    is_testing: true,
  });

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
