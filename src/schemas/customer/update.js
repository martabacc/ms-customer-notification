const Joi = require('joi');

const updateSchema = {
  body: Joi.object().keys({ callback_url: Joi.string().required() }),
  params: Joi.object().keys({ customer_id: Joi.string().trim().required() }),
};

module.exports = updateSchema;
