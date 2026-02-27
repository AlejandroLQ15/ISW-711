const express = require('express');
const { coursePost, courseGet } = require('../controllers/course');
const router = express.Router();

router.post('/course', coursePost);
router.get('/courses', courseGet);

module.exports = router;