const knexfile = require('./knexfile');

const database = knexfile.development;

const knex = require('knex')(database);

module.exports = knex;
