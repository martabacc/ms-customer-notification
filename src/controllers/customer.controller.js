const httpStatus = require('http-status');
const customerService = require('../services/customer.service');

const patch = async (req, res) => {
  const { customer_id } = req.params;
  const payload = req.body;

  const customer = await customerService.get(customer_id);

  if (!customer) {
    return res.status(httpStatus.NOT_FOUND).send();
  }

  const updatedCustomer = await customerService.update(customer_id, payload);

  res.status(httpStatus.OK).send(updatedCustomer);
};

const updateAuthKey = async (req, res) => {
  const { customer_id } = req.params;

  const customer = await customerService.get(customer_id);

  if (!customer) {
    return res.status(httpStatus.NOT_FOUND).send();
  }

  const updatedCustomer = await customerService.updateAuthKey(customer_id);

  res.status(httpStatus.OK).send(updatedCustomer);
};

const get = async (req, res) => {
  const { customer_id } = req.params;

  const customer = await customerService.get(customer_id);

  if (!customer) {
    return res.status(httpStatus.NOT_FOUND).send();
  }

  res.status(httpStatus.OK).send(customer);
};

const create = async (req, res) => {
  const payload = req.body;

  const customer = await customerService.create(payload);

  res.status(httpStatus.CREATED).send(customer);
};

module.exports = {
  patch,
  updateAuthKey,
  get,
  create,
};
