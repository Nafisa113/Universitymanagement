const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// GET all alumni
router.get('/', async (req, res) => {
  const alumni = await Alumni.find();
  res.json(alumni);
});

// POST add alumni
router.post('/', upload.single('photo'), async (req, res) => {
  const { name, achievements } = req.body;
  const alumni = new Alumni({ name, achievements, photo: req.file.filename });
  await alumni.save();
  res.json({ message: 'Alumni added', alumni });
});

module.exports = router;
