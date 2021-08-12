const { Notification } = require('../models');

/**
 * create comment to model
 * @param {string} notification_id
 * @param {Object} payload to be updated
 * @returns {Promise<Notification>}
 */
const update = async (notification_id, payload) => {
  return Notification.findOneAndUpdate({ notification_id }, payload);
};

/**
 * getting record of notification in database
 * @param {string} notification_id
 * @returns {Promise<Notification>}
 */
const create = async (notification_id) => {
  return Notification.findOne({ notification_id });
};

module.exports = {
  update,
  create,
};