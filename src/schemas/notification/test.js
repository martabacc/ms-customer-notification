const Joi = require('joi');

const test = {
  body: Joi.object().keys({
    payment_id: Joi.string().trim().required(),
    payment_code: Joi.string().trim().required(),
    paid_at: Joi.string().trim().required(),
    external_id: Joi.string().trim().required(),
    customer_id: Joi.string().trim().required(),
    callback_url: Joi.string().trim().required(),
    authentication_key: Joi.string().trim().required(),
    amount: Joi.number().required(),
  }),
};

module.exports = test;
