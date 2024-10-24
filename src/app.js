const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const category = require('./routes/category');
const menus = require('./routes/menus');

const others = require('./middlewares/othersHandler');
const errors = require('./middlewares/errorsHandler');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/category', category);
app.use('/menus', menus);

app.use(errors)
app.use('*', others);

module.exports = app;
