module.exports = (err, req, res, next) => {
	if (err) {
		console.error(err);
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		return res.status(err.statusCode).json({
			message: err.message.toLowerCase(),
		});
	}
	next();
};
