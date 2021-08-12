const express = require('express');
const memberController = require('../controllers/member.controller');

const router = express.Router();

router.get('/:organizationName/members', memberController.getMembers);

module.exports = router;
