const express = require("express");
const router = express.Router();
const payments = require("../../controllers/v1/payments.controller");

router.get("/", payments.getAll);
router.post("/", payments.create);
router.delete("/:id", payments.remove);
router.put("/:id", payments.update);

module.exports = router;
