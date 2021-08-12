const express = require('express');
const customerController = require('../controllers/customer.controller');

const router = express.Router();

router.post('/:{customerId}', customerController.patch);

module.exports = router;
