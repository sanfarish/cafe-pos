const knex = require('../databases/knex');

const findAll = () => {
	return knex('payments').select('*')
	.join('wallets', 'payments.id_wallet', '=', 'wallets.id')
	.orderBy('active', 'desc')
	.orderBy('id_wallet', 'desc');
};

module.exports = { findAll };
