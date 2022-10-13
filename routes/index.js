const express = require('express');
const router = express.Router();

const signupRouter = require('./signup.js');
const postsRouter = require('./posts.js');
const loginRouter = require('./login.js');
const likesRouter = require('./likes.js');
const commentsRouter = require('./comments.js');

router.use('/signup', [signupRouter]);
router.use('/posts', [postsRouter]);
router.use('/login', [loginRouter]);
router.use('/likes', [likesRouter]);
router.use('/comments', [commentsRouter]);

module.exports = router;
