const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const category = require('./routes/category');

const othersHandler = require('./middlewares/othersHandler');
const errorsHandler = require('./middlewares/errorsHandler');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/category', category);

app.use(errorsHandler)
app.use('*', othersHandler);

module.exports = app;
