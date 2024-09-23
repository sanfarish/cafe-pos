const express = require('express');
const router = express.Router();
const menuEvents = require('../controllers/menuEvents');

router.get('/', menuEvents.findAll);

module.exports = router;
