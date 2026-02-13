const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

// GET all notices
router.get('/', async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 });
  res.json(notices);
});

// POST add notice
router.post('/', async (req, res) => {
  const { text } = req.body;
  const notice = new Notice({ text });
  await notice.save();
  res.json({ message: 'Notice added', notice });
});

module.exports = router;
