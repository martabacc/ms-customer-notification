const Joi = require('joi');

const createSchema = {
  body: Joi.object().keys({
    payment_id: Joi.string().trim().required(),
    payment_code: Joi.string().trim().required(),
    paid_at: Joi.string().trim().required(),
    external_id: Joi.string().trim().required(),
    customer_id: Joi.string().trim().required(),
    amount: Joi.number().required(),
  }),
};

module.exports = createSchema;
