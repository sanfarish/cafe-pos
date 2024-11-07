const express = require("express");
const router = express.Router();
const categories = require("../../controllers/v1/categories.controller");

router.get("/", categories.getAll);
router.post("/", categories.create);
router.delete("/:id", categories.remove);
router.put("/:id", categories.update);

module.exports = router;
