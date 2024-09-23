const express = require('express');
const router = express.Router();
const payments = require('../controllers/payments');

router.get('/', payments.findAll);

module.exports = router;
