const express = require('express');
const app = express();

const category = require('./category.route');
const payments = require('./payments.route');
const menus = require('./menus.route');
const orders = require('./orders.route');

app.use('/category', category);
app.use('/payments', payments);
app.use('/menus', menus);
app.use('/orders', orders);

module.exports = app;
