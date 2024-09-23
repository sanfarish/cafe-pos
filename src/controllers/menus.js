const menus = require('../models/menus');
const errorCatch = require('../utils/errorcatch');

const findAll = async (req, res) => {
	try {
		const data = await menus.findAll();
		res.status(200).send(data);
	} catch (err) {
		errorCatch(res, err, 500);
	};
};

module.exports = { findAll };
