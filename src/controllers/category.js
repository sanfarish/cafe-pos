const { category } = require('../models');

const getAll =  async (req, res, next) => {
    try {
        const data = await category.findAll({
            attributes: ['id', 'name']
        });
        res.status(201).json(data);
    } catch (error) {
        next(error);
    };
};

module.exports = { getAll };
