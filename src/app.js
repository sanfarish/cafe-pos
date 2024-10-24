const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const v1 = require('./routes/v1');

const others = require('./middlewares/othersHandler');
const errors = require('./middlewares/errorsHandler');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/v1', v1);

app.use(errors)
app.use('*', others);

module.exports = app;
