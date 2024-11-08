const models = require("../../models");
const asyncWrapper = require("../../middlewares/asyncWrapper");

const getAll = asyncWrapper(async (req, res) => {
	const draft = await models.menus.findAll({
		order: [[ "category_id", "ASC" ], [ "name", "ASC" ]],
		include: models.categories,
	});
	const data = draft.map(item => {
		item.image = process.env.IMAGE_URL + item.image;
		return item;
	});
	res.status(200).json(data);
});

const create = asyncWrapper(async (req, res) => {
	const data = await models.menus.create({
		id: crypto.randomUUID(),
		name: req.body.name,
		price: req.body.price,
		status: req.body.status,
		category_id: req.body.category_id,
	});
	res.status(201).json({
		status: "success",
		data: data.dataValues,
	});
});

const remove = asyncWrapper(async (req, res) => {
	await models.menus.destroy({
		where: {
			id: req.params.id,
		},
	});
	res.status(204).end();
});

const update = asyncWrapper(async (req, res) => {
	await models.menus.update(
		{
			name: req.body.name,
			price: req.body.price,
			status: req.body.status,
			category_id: req.body.category_id,
		},
		{
			where: {
				id: req.params.id,
			},
		},
	);
	const data = await models.menus.findByPk(req.params.id);
	res.status(200).json({
		status: "success",
		data,
	});
});

module.exports = { getAll, create, remove, update };
