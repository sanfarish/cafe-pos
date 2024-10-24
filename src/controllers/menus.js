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

const create =  async (req, res, next) => {
    try {
        const data = await models.menus.create({
            id: crypto.randomUUID(),
            name: req.body.name,
            price: req.body.price,
            status: req.body.status,
            category_id: req.body.category_id
        });
        res.status(201).json({
            status: 'success',
            data: data.dataValues
        });
    } catch (error) {
        next(error);
    };
};

const remove = async (req, res, next) => {
    try {
        await models.menus.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(204).end();
    } catch (error) {
        next(error);
    };
};

const update = async (req, res, next) => {
    try {
        await models.menus.update({
            name: req.body.name,
            price: req.body.price,
            status: req.body.status,
            category_id: req.body.category_id
        }, {
            where: {
                id: req.params.id
            }
        });
        const data = await models.menus.findByPk(req.params.id);
        res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        next(error);
    };
};

module.exports = { getAll, create, remove, update };
