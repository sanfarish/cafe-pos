const models = require("../../models");
const asyncWrapper = require("../../middlewares/asyncWrapper");

const getAll = asyncWrapper(async (req, res) => {
	const data = await models.categories.findAll();
	res.status(200).json(data);
});

const create = asyncWrapper(async (req, res) => {
	const data = await models.categories.create({
		id: crypto.randomUUID(),
		name: req.body.name,
	});
	res.status(201).json({
		status: "success",
		data: data.dataValues,
	});
});

const remove = asyncWrapper(async (req, res) => {
	await models.categories.destroy({
		where: {
			id: req.params.id,
		},
	});
	res.status(204).end();
});

const update = asyncWrapper(async (req, res) => {
	await models.categories.update(
		{
			name: req.body.name,
		},
		{
			where: {
				id: req.params.id,
			},
		},
	);
	const data = await models.categories.findByPk(req.params.id);
	res.status(200).json({
		status: "success",
		data,
	});
});

module.exports = { getAll, create, remove, update };
