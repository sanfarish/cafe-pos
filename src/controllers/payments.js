const payments = require('../models/payments');
const errorCatch = require('../utils/errorcatch');

const findAll = async (req, res) => {
	try {
		const data = await payments.findAll();
		res.status(200).send(data);
	} catch (err) {
		errorCatch(res, err, 500);
	};
};

module.exports = { findAll };
