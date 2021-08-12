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
 * create comment to model
 * @param {string} customerId
 * @returns {Promise<Customer>}
 */
const updateAuthKey = async (customerId) => {
  const newKey = uuidv4();
  const payload = { authenticationKey: newKey };

  return Customer.findOneAndUpdate({ customerId }, payload);
};

module.exports = {
  update,
  updateAuthKey,
};
