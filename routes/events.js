const express = require('express');
const router = express.Router();
const data = require('../data/event.js')

router.get('/', async (req, res) => {
  let events = await data.getEvents();
  res.json(events);
});

router.get("/:id", async(req,res)=>{
  try {
    let events = await data.getEvent(req.params.id);
    events ? res.json(events) : res.status(404).json({});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({});
  }
})

module.exports = router;