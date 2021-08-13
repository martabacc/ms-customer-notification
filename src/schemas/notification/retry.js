const Joi = require('joi');

const retry = {
  body: Joi.object().keys({ customer_id: Joi.string().trim().required() }),
};

module.exports = retry;
