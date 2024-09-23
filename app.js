const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const orders = require('./src/routes/orders');
const menus = require('./src/routes/menus');
const menuEvents = require('./src/routes/menuEvents');
const menuCategories = require('./src/routes/menuCategories');
const payments = require('./src/routes/payments');
const wallets = require('./src/routes/wallets');
const users = require('./src/routes/users');
const roles = require('./src/routes/roles');

const notFound = require('./src/middlewares/notFound');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/orders', orders);
app.use('/menus', menus);
app.use('/menu-events', menuEvents);
app.use('/menu-categories', menuCategories);

// manager only
app.use('/payments', payments);
app.use('/wallets', wallets);
app.use('/users', users);
app.use('/roles', roles);

app.use('*', notFound);

module.exports = app;
