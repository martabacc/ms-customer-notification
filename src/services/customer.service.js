const { v4: uuidv4 } = require('uuid');
const { Customer } = require('../models');

/**
 * create comment to model
 * @param {string} customer_id
 * @param {Object} payload to be updated
 * @returns {Promise<Customer>}
 */
const update = async (customer_id, payload) => {
  return Customer.findOneAndUpdate({ customer_id }, payload);
};

/**
 * update authentication key
 * @param {string} customer_id
 * @returns {Promise<Customer>}
 */
const updateAuthKey = async (customer_id) => {
  const newKey = uuidv4();
  const payload = { authentication_key: newKey };

  return Customer.findOneAndUpdate({ customer_id }, payload);
};

/**
 * getting record of customer in database
 * @param {string} customer_id
 * @returns {Promise<Customer>}
 */
const get = async (customer_id) => {
  return Customer.findOne({ customer_id });
};

module.exports = {
  update,
  get,
  updateAuthKey,
};
