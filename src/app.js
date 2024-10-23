const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const { category } = require('./models');
// const category = require('./models/category');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const data = await category.findAll({
            attributes: ['id', 'name']
        });
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('error');
    };
});

module.exports = app;
