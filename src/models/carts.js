const knex = require('../databases/knex');

const findByOrderID = (orderID) => {
	return knex('carts').select('menu_categories.category', 'menus.name', 'menus.price', 'carts.quantity')
	.join('menus', 'carts.id_menu', '=', 'menus.id')
	.join('menu_categories', 'menus.id_category', '=', 'menu_categories.id')
	.where('id_order', '=', orderID)
	.orderBy('id_menu', 'desc');
};

module.exports = { findByOrderID };
