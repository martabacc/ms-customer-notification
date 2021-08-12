const mongoose = require('mongoose');
const softDelete = require('mongoosejs-soft-delete');

const { toJSON } = require('./plugins');

const notificationSchema = mongoose.Schema(
  {
    notificationId: {
      type: String,
      required: true,
      trim: true,
    },
    payload: {
      type: String,
      required: true,
      trim: true,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      trim: true,
    },
    customerRecipientID: {
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
notificationSchema.plugin(toJSON);
notificationSchema.plugin(softDelete);

/**
 * @typedef Notification
 */
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
