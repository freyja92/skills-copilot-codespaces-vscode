//create a web server
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const commentsController = require('../controllers/comments_controller');

router.post('/create', commentsController.create);
router.get('/destroy/:id', commentsController.destroy);

module.exports = router;