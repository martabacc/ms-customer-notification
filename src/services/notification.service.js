const { Notification } = require('../models');

/**
 * create comment to model
 * @param {string} notification_id
 * @param {Object} payload to be updated
 * @returns {Promise<Notification>}
 */
const update = async (notification_id, payload) => {
  return Notification.findOneAndUpdate({ _id: notification_id }, payload);
};

/**
 * create notification record in database
 * @param {Object} payload
 * @returns {Promise<Notification>}
 */
const create = async (payload) => {
  return Notification.create(payload);
};

/**
 * getting record of notification in database
 * @param {string} customer_id
 * @returns {Promise<Notification>}
 */
const findUndelivered = async (customer_id) => {
  return Notification.find({
    customer_id,
    is_delivered: false,
    is_testing: false,
  });
};

module.exports = {
  update,
  create,
  findUndelivered,
};
