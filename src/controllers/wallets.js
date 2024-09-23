const wallets = require('../models/wallets');
const errorCatch = require('../utils/errorcatch');

const findAll = async (req, res) => {
	try {
		const data = await wallets.findAll();
		res.status(200).send(data);
	} catch (error) {
		errorCatch(res, err, 500);
	};
};

module.exports = { findAll };
