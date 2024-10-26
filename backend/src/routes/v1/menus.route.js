const express = require("express");
const router = express.Router();
const menus = require("../../controllers/v1/menus.controller");

router.get("/", menus.getAll);
router.post("/", menus.create);
router.delete("/:id", menus.remove);
router.put("/:id", menus.update);

module.exports = router;
