const { v4: uuidv4 } = require('uuid');
const { Customer } = require('../models');

/**
 * create comment to model
 * @param {string} customerId
 * @param {Object} payload to be updated
 * @returns {Promise<Customer>}
 */
const update = async (customerId, payload) => {
  return Customer.findOneAndUpdate({ customerId }, payload);
};

/**
 * update authentication key
 * @param {string} customerId
 * @returns {Promise<Customer>}
 */
const updateAuthKey = async (customerId) => {
  const newKey = uuidv4();
  const payload = { authenticationKey: newKey };

  return Customer.findOneAndUpdate({ customerId }, payload);
};

/**
 * getting record of customer in database
 * @param {string} customerId
 * @returns {Promise<Customer>}
 */
const get = async (customerId) => {
  return Customer.findOne({ customerId });
};

module.exports = {
  update,
  get,
  updateAuthKey,
};
