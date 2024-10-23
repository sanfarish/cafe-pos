const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const category = require('./routes/category');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/category', category);

module.exports = app;
