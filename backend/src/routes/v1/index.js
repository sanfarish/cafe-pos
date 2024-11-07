const express = require("express");
const router = express.Router();
const swaggerUI = require('swagger-ui-express');
const docs = require('../../docs/v1/openapi.json');

const categories = require("./categories.route");
const payments = require("./payments.route");
const menus = require("./menus.route");
const orders = require("./orders.route");

router.use("/images", express.static('public'));
router.use("/categories", categories);
router.use("/payments", payments);
router.use("/menus", menus);
router.use("/orders", orders);
router.use("/docs", swaggerUI.serve, swaggerUI.setup(docs));

module.exports = router;
