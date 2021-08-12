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

module.exports = {
  update,
};
