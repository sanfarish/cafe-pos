const knex = require('../databases/knex');

const findAll = () => {
	return knex('menu_categories').select('*').orderBy('category', 'desc');
};

module.exports = { findAll };
