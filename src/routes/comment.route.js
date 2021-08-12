const express = require('express');
const commentController = require('../controllers/comment.controller');

const router = express.Router();

router.post('/:organizationName/comments', commentController.create);
router.get('/:organizationName/comments', commentController.get);
router.delete('/:organizationName/comments', commentController.softDelete);

module.exports = router;
