const express = require('express');
const router = express.Router();
const menus = require('../controllers/menus');

router.get('/', menus.findAll);

module.exports = router;
