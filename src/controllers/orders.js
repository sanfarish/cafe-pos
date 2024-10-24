const models = require('../models');

const getAll =  async (req, res, next) => {
    try {
        const data = await models.orders.findAll({
            attributes: [
                'id',
                'bill',
                'created_at'
            ],
            include: models.payments
        });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    };
};

const create =  async (req, res, next) => {
    try {
        const data = await models.orders.create({
            id: crypto.randomUUID(),
            bill: req.body.bill,
            payment_id: req.body.payment_id,
            created_at: new Date()
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
        await models.orders.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(204).end();
    } catch (error) {
        next(error);
    };
};

// const update = async (req, res, next) => {
//     try {
//         await models.orders.update({
//             bill: req.body.bill,
//             payment_id: req.body.payment_id,
//             created_at: new Date()
//         }, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         const data = await models.orders.findByPk(req.params.id);
//         res.status(200).json({
//             status: 'success',
//             data
//         });
//     } catch (error) {
//         next(error);
//     };
// };

module.exports = { getAll, create, remove, /* update */ };
