const knex = require('../databases/knex');

const findAll = () => {
	return knex('wallets').select('*').orderBy('wallet', 'desc');
};

module.exports = { findAll };
