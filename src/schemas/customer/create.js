const Joi = require('joi');

const createSchema = {
  body: Joi.object().keys({
    name: Joi.string().trim().required(),
    callback_url: Joi.string().trim().required(),
    customer_id: Joi.string().trim().required(),
    authentication_key: Joi.string().trim().required(),
  }),
};

module.exports = createSchema;
