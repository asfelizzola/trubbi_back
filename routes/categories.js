const express = require('express');
const router = express.Router();
const data = require('../data/category')

router.get('/', async (req, res) => {
  let categories = await data.getCategories();
  res.json(categories);
});

module.exports = router;