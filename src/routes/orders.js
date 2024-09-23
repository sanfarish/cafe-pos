const express = require('express');
const router = express.Router();
const orders = require('../controllers/orders');

router.get('/', orders.findAll);

module.exports = router;
