const express = require("express");
const router = express.Router();
const category = require("../../controllers/v1/category.controller");

router.get("/", category.getAll);
router.post("/", category.create);
router.delete("/:id", category.remove);
router.put("/:id", category.update);

module.exports = router;
