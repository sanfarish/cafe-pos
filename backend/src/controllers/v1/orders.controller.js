const models = require("../../models");
const asyncWrapper = require("../../middlewares/asyncWrapper");

const getAll = asyncWrapper(async (req, res) => {
	const draft = await models.orders.findAll({
		include: {
			model: models.payments,
		},
	});
	const data = await Promise.all(
		draft.map(async (e) => {
			const obj = e.toJSON();
			const draft = await models.carts.findAll({
				where: {
					order_id: e.id,
				},
				include: {
					model: models.menus,
				},
			});
			const carts = draft.map((e) => {
				return e.toJSON();
			});
			return { ...obj, carts };
		}),
	);
	res.status(200).json(data);
});

const create = asyncWrapper(async (req, res) => {
	const ordersDraft = await models.orders.create({
		id: crypto.randomUUID(),
		bill: req.body.bill,
		payment_id: req.body.payment_id,
		created_at: new Date(),
	});
	const cartsBody = req.body.carts;
	const orders = ordersDraft.toJSON();
	const carts = await Promise.all(
		cartsBody.map(async (e) => {
			const obj = await models.carts.create({
				order_id: orders.id,
				menu_id: e.menu_id,
				quantity: e.quantity,
			});
			const cartsDraft = obj.toJSON();
			return {
				menu_id: cartsDraft.menu_id,
				quantity: cartsDraft.quantity,
			};
		}),
	);
	const data = { ...orders, carts };
	res.status(201).json({
		status: "success",
		data,
	});
});

const remove = asyncWrapper(async (req, res) => {
	await models.carts.destroy({
		where: {
			order_id: req.params.id,
		},
	});
	await models.orders.destroy({
		where: {
			id: req.params.id,
		},
	});
	res.status(204).end();
});

// const update = asyncWrapper(async (req, res) => {
// 	await models.orders.update({
// 		bill: req.body.bill,
// 		payment_id: req.body.payment_id,
// 		created_at: new Date()
// 	}, {
// 		where: {
// 			id: req.params.id
// 		}
// 	});
// 	const data = await models.orders.findByPk(req.params.id);
// 	res.status(200).json({
// 		status: 'success',
// 		data
// 	});
// });

module.exports = { getAll, create, remove, /* update */ };
