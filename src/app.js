const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('nice');
});

module.exports = app;
