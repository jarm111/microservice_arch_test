const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/comment', commentController.getComment);
router.post('/comment', commentController.postComment);

module.exports = router;