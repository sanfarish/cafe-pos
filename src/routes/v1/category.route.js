const express = require('express');
const router = express.Router();
const category = require('../../controllers/category.controller');

router.get('/', category.getAll);
router.post('/', category.create);
router.delete('/:id', category.remove);
router.put('/:id', category.update);

module.exports = router;
