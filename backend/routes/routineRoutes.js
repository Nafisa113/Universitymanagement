const express = require('express');
const router = express.Router();
const Routine = require('../models/Routine');

// GET all routines
router.get('/', async (req, res) => {
  const routines = await Routine.find();
  res.json(routines);
});

// POST add routine
router.post('/', async (req, res) => {
  const { day, time, classLab } = req.body;
  const routine = new Routine({ day, time, classLab });
  await routine.save();
  res.json({ message: 'Routine added', routine });
});

module.exports = router;
