const httpStatus = require('http-status');
const customerService = require('../services/customer.service');

const patch = async (req, res) => {
  const { customerId } = req.params;
  const payload = req.body;

  const customer = await customerService.update(customerId, payload);

  res.status(httpStatus.OK).send(customer);
};

const updateAuthKey = async (req, res) => {
  const { customerId } = req.params;

  const customer = await customerService.updateAuthKey(customerId);

  res.status(httpStatus.OK).send(customer);
};

module.exports = {
  patch,
  updateAuthKey,
};
