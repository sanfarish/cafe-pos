const express = require("express");
const router = express.Router();
const swaggerUI = require('swagger-ui-express');
const docs = require('../../docs/v1/openapi.json');

const category = require("./category.route");
const payments = require("./payments.route");
const menus = require("./menus.route");
const orders = require("./orders.route");

router.use("/images", express.static('public'));
router.use("/category", category);
router.use("/payments", payments);
router.use("/menus", menus);
router.use("/orders", orders);
router.use("/docs", swaggerUI.serve, swaggerUI.setup(docs));

module.exports = router;
