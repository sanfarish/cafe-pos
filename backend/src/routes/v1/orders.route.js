const express = require("express");
const router = express.Router();
const orders = require("../../controllers/v1/orders.controller");

router.get("/", orders.getAll);
router.post("/", orders.create);
router.delete("/:id", orders.remove);
// router.put('/:id', orders.update);

module.exports = router;
