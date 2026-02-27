const User = require('../models/user');

async function userPost(req, res) {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

async function userGet(req, res) {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = { userPost, userGet };