const express = require('express');
const router = express.Router();
const wallets = require('../controllers/wallets');

router.get('/', wallets.findAll);

module.exports = router;
