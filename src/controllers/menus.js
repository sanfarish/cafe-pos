const models = require('../models');

const getAll =  async (req, res, next) => {
    try {
        const data = await models.menus.findAll({
            attributes: [
                'id',
                'name',
                'price',
                'status'
            ],
            include: models.category
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    };
};

module.exports = { getAll };
