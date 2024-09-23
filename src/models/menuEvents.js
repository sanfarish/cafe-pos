const knex = require('../databases/knex');

const findAll = () => {
	return knex('menu_events').select('*').orderBy('event', 'desc');
};

module.exports = { findAll };
