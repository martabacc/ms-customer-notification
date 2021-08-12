const mongoose = require('mongoose');
const softDelete = require('mongoosejs-soft-delete');

const { toJSON } = require('./plugins');

const customerSchema = mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
      trim: true,
    },
    authenticationKey: {
      type: String,
      required: true,
      trim: true,
    },
    subscriptionURL: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
customerSchema.plugin(toJSON);
customerSchema.plugin(softDelete);

/**
 * @typedef User
 */
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
