const models = require("../../models");
const asyncWrapper = require("../../middlewares/asyncWrapper");

const getAll = asyncWrapper(async (req, res) => {
	const data = await models.category.findAll();
	res.status(200).json(data);
});

const create = asyncWrapper(async (req, res) => {
	const data = await models.category.create({
		id: crypto.randomUUID(),
		name: req.body.name,
	});
	res.status(201).json({
		status: "success",
		data: data.dataValues,
	});
});

const remove = asyncWrapper(async (req, res) => {
	await models.category.destroy({
		where: {
			id: req.params.id,
		},
	});
	res.status(204).end();
});

const update = asyncWrapper(async (req, res) => {
	await models.category.update(
		{
			name: req.body.name,
		},
		{
			where: {
				id: req.params.id,
			},
		},
	);
	const data = await models.category.findByPk(req.params.id);
	res.status(200).json({
		status: "success",
		data,
	});
});

module.exports = { getAll, create, remove, update };
