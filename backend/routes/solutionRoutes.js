const express = require('express');
const router = express.Router();
const Solution = require('../models/Solution');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// GET all solutions
router.get('/', async (req, res) => {
  const solutions = await Solution.find();
  res.json(solutions);
});

// POST upload solution
router.post('/', upload.single('file'), async (req, res) => {
  const { pyq } = req.body;
  const solution = new Solution({ pyq, file: req.file.filename });
  await solution.save();
  res.json({ message: 'Solution uploaded', solution });
});

module.exports = router;
