const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// GET all faculty
router.get('/', async (req, res) => {
  const faculty = await Faculty.find();
  res.json(faculty);
});

// POST add faculty
router.post('/', async (req, res) => {
  const { name, designation, email, phone } = req.body;
  const fac = new Faculty({ name, designation, email, phone });
  await fac.save();
  res.json({ message: 'Faculty added', fac });
});

module.exports = router;
