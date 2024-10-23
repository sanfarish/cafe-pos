const { category } = require('../models');

const getAll =  async (req, res) => {
    try {
        const data = await category.findAll({
            attributes: ['id', 'name']
        });
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            error
        })
    };
};

module.exports = { getAll };
