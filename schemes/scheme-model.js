const knex = require('knex');
const db = knex(require('../knexfile').development);

const find = () => db('schemes');

const findByID = (id) => db('schemes').where({ id });

