const models = require("../../models");
const asyncWrapper = require("../../middlewares/asyncWrapper");

const getAll = asyncWrapper(async (req, res) => {
	const data = await models.payments.findAll();
	res.status(200).json(data);
});

const create = asyncWrapper(async (req, res) => {
	const data = await models.payments.create({
		id: crypto.randomUUID(),
		name: req.body.name,
		account: req.body.account,
	});
	res.status(201).json({
		status: "success",
		data: data.dataValues,
	});
});

const remove = asyncWrapper(async (req, res) => {
	await models.payments.destroy({
		where: {
			id: req.params.id,
		},
	});
	res.status(204).end();
});

const update = asyncWrapper(async (req, res) => {
	await models.payments.update(
		{
			name: req.body.name,
			account: req.body.account,
		},
		{
			where: {
				id: req.params.id,
			},
		},
	);
	const data = await models.payments.findByPk(req.params.id);
	res.status(200).json({
		status: "success",
		data,
	});
});

module.exports = { getAll, create, remove, update };
