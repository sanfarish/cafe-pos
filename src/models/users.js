const knex = require('../databases/knex');

const findAll = () => {
	return knex('users').select('*').orderBy('id_role', 'desc');
};

module.exports = { findAll };
