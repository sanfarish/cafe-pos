const orders = require('../models/orders');
const carts = require('../models/carts');
const errorCatch = require('../utils/errorcatch');

const findAll = async (req, res) => {
	try {
		const order = await orders.findAll();
		const cart = await carts.findByOrderID(order[0].id);
		let newCart = {};
		let grandTotal = 0;
		cart.forEach(item => {
			let newItem = { ...item };
			delete newItem.category;
			const total = item.price * item.quantity;
			grandTotal += total;
			if (item.category in newCart) {
				newCart[item.category].push({ ...newItem, total });
			} else {
				newCart = { ...newCart, [item.category]: [{ ...newItem, total }] };
			};
		});
		const newOrder = { ...order[0], grand_total: grandTotal };
		const data = { ...newOrder, cart: newCart };
		res.status(200).send(data);
	} catch (err) {
		errorCatch(res, err, 500);
	};
};

module.exports = { findAll };
