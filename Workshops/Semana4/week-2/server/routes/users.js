const express = require('express');
const { userPost, userGet } = require('../controllers/user');
const router = express.Router();

router.post('/user', userPost);
router.get('/users', userGet);

module.exports = router;