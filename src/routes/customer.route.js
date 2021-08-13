const express = require('express');
const customerController = require('../controllers/customer.controller');
const validate = require('../middlewares/validate');
const { customer: schema } = require('../schemas');

const router = express.Router();

router.post('/', validate(schema.create), customerController.create);
router.get('/:customer_id', validate(schema.get), customerController.get);
router.patch('/:customer_id', validate(schema.update), customerController.patch);
/* having the same schema with get so this reusing the schema */
router.post('/:customer_id/key', validate(schema.get), customerController.updateAuthKey);

module.exports = router;
