const express = require('express');
const { teacherPost, teacherGet } = require('../controllers/teacher');
const router = express.Router();

router.post('/teacher', teacherPost);
router.get('/teachers', teacherGet);

module.exports = router;