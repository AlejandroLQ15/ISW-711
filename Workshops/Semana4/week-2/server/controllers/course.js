const Course = require('../models/course');

async function coursePost(req, res) {
  try {
    const course = new Course(req.body);
    const saved = await course.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

async function courseGet(req, res) {
  try {
    const data = await Course.find().populate('profesor_id');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = { coursePost, courseGet };