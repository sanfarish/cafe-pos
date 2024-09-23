const express = require('express');
const router = express.Router();
const menuCategories = require('../controllers/menuCategories');

router.get('/', menuCategories.findAll);

module.exports = router;
