const Joi = require('joi');

const getSchema = {
  params: Joi.object().keys({ customer_id: Joi.string().trim().required() }),
};

module.exports = getSchema;
