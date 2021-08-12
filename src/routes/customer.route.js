const express = require('express');
const customerController = require('../controllers/customer.controller');

const router = express.Router();

router.patch('/:{customerId}', customerController.patch);
router.post('/:{customerId}/key', customerController.updateAuthKey);

module.exports = router;
