const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET all students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// POST add student
router.post('/', async (req, res) => {
  const { name, batch, role } = req.body;
  const student = new Student({ name, batch, role });
  await student.save();
  res.json({ message: 'Student added', student });
});

module.exports = router;
