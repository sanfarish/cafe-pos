const knex = require('../databases/knex');

const findAll = () => {
	return knex('roles').select('*').orderBy('id', 'desc');
};

module.exports = { findAll };
