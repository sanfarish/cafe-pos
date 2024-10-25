const express = require("express");
const router = express.Router();
const orders = require("../../controllers/orders.controller");

router.get("/", orders.getAll);
router.post("/", orders.create);
router.delete("/:id", orders.remove);
// router.put('/:id', orders.update);

module.exports = router;
