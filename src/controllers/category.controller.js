const models = require('../models');

const getAll =  async (req, res, next) => {
    try {
        const data = await models.category.findAll();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    };
};

const create =  async (req, res, next) => {
    try {
        const data = await models.category.create({
            id: crypto.randomUUID(),
            name: req.body.name
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
        await models.category.destroy({
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
        await models.category.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        });
        const data = await models.category.findByPk(req.params.id);
        res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        next(error);
    };
};

module.exports = { getAll, create, remove, update };
