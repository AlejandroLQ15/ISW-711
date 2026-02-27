const Professor = require('../models/professor');

async function teacherPost(req, res) {
  try {
    const prof = new Professor(req.body);
    const saved = await prof.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

async function teacherGet(req, res) {
  try {
    const data = await Professor.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = { teacherPost, teacherGet };