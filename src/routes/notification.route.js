const express = require('express');
const notificationController = require('../controllers/notification.controller');
const validate = require('../middlewares/validate');
const { notification: schema } = require('../schemas');

const router = express.Router();

router.post('/', validate(schema.create), notificationController.sendNotification);
router.post('/test', validate(schema.test), notificationController.sendDummyNotification);
router.post('/retry', validate(schema.retry), notificationController.retryDelivery);
router.patch('/:notification_id', validate(schema.update), notificationController.update);

module.exports = router;
