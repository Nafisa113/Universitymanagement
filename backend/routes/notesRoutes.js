const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// GET all notes
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST upload note
router.post('/', upload.single('file'), async (req, res) => {
  const { course, title } = req.body;
  const note = new Note({ course, title, file: req.file.filename });
  await note.save();
  res.json({ message: 'Note uploaded', note });
});

// ✅ EXPORT ROUTER
module.exports = router;
