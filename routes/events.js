const express = require('express');
const router = express.Router();
const data = require('../data/event')

router.get('/', async (req, res) => {
  let events = await data.getEvents();
  res.json(events);
});

module.exports = router;