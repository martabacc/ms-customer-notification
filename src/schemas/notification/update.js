const Joi = require('joi');

const updateSchema = {
  params: Joi.object().keys({ notification_id: Joi.string().required() }),
  body: Joi.object().keys({ is_delivered: Joi.boolean().required() }),
};

module.exports = updateSchema;
