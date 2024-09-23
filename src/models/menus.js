const knex = require('../databases/knex');

const findAll = () => {
	return knex('menus').select('*')
	.join('menu_categories', 'menus.id_category', '=', 'menu_categories.id')
	.join('menu_events', 'menus.id_event', '=', 'menu_events.id')
	.orderBy('active', 'desc')
	.orderBy('id_category', 'desc')
	.orderBy('name', 'desc');
};

module.exports = { findAll };
