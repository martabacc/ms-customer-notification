const uuid = require('uuid');
const { Customer } = require('../models');

/**
 * create comment to model
 * @param {string} customer_id
 * @param {Object} payload to be updated
 * @returns {Promise<Customer>}
 */
const update = (customer_id, payload) => {
  return Customer.findOneAndUpdate({ customer_id }, payload, { new: true });
};

/**
 * update authentication key
 * @param {string} customer_id
 * @returns {Promise<Customer>}
 */
const updateAuthKey = (customer_id) => {
  const newKey = uuid.v4();
  const payload = { authentication_key: newKey };

  return Customer.findOneAndUpdate({ customer_id }, payload, { new: true });
};

/**
 * getting record of customer in database
 * @param {string} customer_id
 * @returns {Promise<Customer>}
 */
const get = (customer_id) => {
  return Customer.findOne({ customer_id });
};

/**
 * getting record of customer in database
 * @param {Object} payload
 * @returns {Promise<Customer>}
 */
const create = (payload) => {
  return Customer.create({
    ...payload,
    authentication_key: uuid.v4(),
  });
};

module.exports = {
  update,
  get,
  updateAuthKey,
  create,
};
