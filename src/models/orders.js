const knex = require('../databases/knex');

const findAll = () => {
	return knex('orders').select('orders.id', 'orders.datetime', 'payments.account_id', 'wallets.wallet', 'orders.bill')
	.join('payments', 'orders.id_payment', '=', 'payments.id')
	.join('wallets', 'payments.id_wallet', '=', 'wallets.id')
	.orderBy('datetime', 'desc');
};

module.exports = { findAll };
