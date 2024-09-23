const errorCatch = (res, err, code) => {
    console.error(err.message);
    res.status(code).send(err.message);
};

module.exports = errorCatch;
