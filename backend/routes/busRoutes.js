const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

// GET all buses
router.get('/', async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
});

// POST add bus schedule
router.post('/', async (req, res) => {
  const { route, time, pickup, drop } = req.body;
  const bus = new Bus({ route, time, pickup, drop });
  await bus.save();
  res.json({ message: 'Bus schedule added', bus });
});

module.exports = router;
