const mongoose = require('mongoose');
const softDelete = require('mongoosejs-soft-delete');

const { toJSON } = require('./plugins');

const notificationSchema = mongoose.Schema(
  {
    payment_id: {
      type: String,
      required: true,
      trim: true,
    },
    payment_code: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: String,
      required: true,
      trim: true,
    },
    paid_at: {
      type: String,
      required: true,
      trim: true,
    },
    external_id: {
      type: String,
      required: true,
      trim: true,
    },
    customer_id: {
      type: String,
      required: true,
      trim: true,
    },
    is_delivered: {
      type: Boolean,
      required: true,
      trim: true,
    },
    is_testing: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    collection: 'notifications',
  }
);

notificationSchema.virtual('notification_id').get(function () {
  return this._id;
});

// tell Mongoose to retrieve the virtual fields
notificationSchema.set('toObject', { virtuals: true });
notificationSchema.set('toJSON', { virtuals: true });

// add plugin that converts mongoose to json
notificationSchema.plugin(toJSON);
notificationSchema.plugin(softDelete);

/**
 * @typedef Notification
 */
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
