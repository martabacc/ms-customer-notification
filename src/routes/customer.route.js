const express = require('express');
const customerController = require('../controllers/customer.controller');

const router = express.Router();

router.get(':{customer_id}', customerController.get);
router.patch(':{customer_id}', customerController.patch);
router.post(':{customer_id}/key', customerController.updateAuthKey);

module.exports = router;
