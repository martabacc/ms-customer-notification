const httpStatus = require('http-status');
const customerService = require('../services/customer.service');

const patch = async (req, res) => {
  const { customer_id } = req.params;
  const payload = req.body;

  const customer = await customerService.update(customer_id, payload);

  res.status(httpStatus.OK).send(customer);
};

const updateAuthKey = async (req, res) => {
  const { customer_id } = req.params;

  const customer = await customerService.updateAuthKey(customer_id);

  res.status(httpStatus.OK).send(customer);
};

const get = async (req, res) => {
  const { customer_id } = req.params;

  const customer = await customerService.get(customer_id);

  res.status(httpStatus.OK).send(customer);
};

module.exports = {
  patch,
  updateAuthKey,
  get,
};
