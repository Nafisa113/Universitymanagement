const express = require('express');
const router = express.Router();
const PYQ = require('../models/PYQ');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// GET all PYQs
router.get('/', async (req, res) => {
  const pyqs = await PYQ.find();
  res.json(pyqs);
});

// POST upload PYQ
router.post('/', upload.single('file'), async (req, res) => {
  const { year, semester } = req.body;
  const pyq = new PYQ({ year, semester, file: req.file.filename });
  await pyq.save();
  res.json({ message: 'PYQ uploaded', pyq });
});

module.exports = router;
