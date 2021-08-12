const express = require('express');
const notificationController = require('../controllers/notification.controller');

const router = express.Router();

router.post('/', notificationController.sendNotification);
router.post('/test', notificationController.sendDummyNotification);
router.post('/retry', notificationController.retryDelivery);
router.patch('/{notification_id}', notificationController.update);

module.exports = router;
