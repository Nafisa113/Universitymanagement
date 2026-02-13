const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// GET all feedbacks
router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find().sort({ date: -1 });
  res.json(feedbacks);
});

// POST feedback
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const fb = new Feedback({ name, email, message });
  await fb.save();
  res.json({ message: 'Feedback submitted', fb });
});

module.exports = router;
