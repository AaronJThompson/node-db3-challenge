const knex = require('knex');
const db = knex(require('../knexfile').development);

const find = () => db('schemes');

const findByID = (id) => db('schemes').where({ id });

const findSteps = (id) => db('steps').select(['id', 'scheme_name', 'step_number', 'instructions']).where({ scheme_id: id });

const add = (scheme) => {
    
}