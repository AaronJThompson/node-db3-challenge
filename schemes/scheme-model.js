const knex = require('knex');
const db = knex(require('../knexfile').development);

const find = () => db('schemes');

const findByID = (id) => db('schemes').where({ id });

const findSteps = (id) => {
    return db
        .select(['id', 'schemes.scheme_name', 'step_number', 'instructions'])
        .from('steps')
        .join('schemes')
        .on('steps.scheme_id', 'schemes.id')
        .where('steps.scheme_id', id );
};

const add = (scheme) => {
    return db('schemes')
        .insert(scheme)
        .then(ids => findByID(ids[0]));
}

const update = (changes, id) => {
    return db('schemes')
        .where({ id: id})
        .update(changes)
        .then(() => findByID(id));
}

const remove = async (id) => {
    const scheme = await findByID(id);
    if (!scheme) return null;
    return db('schemes')
        .where({ id: id })
        .del()
        .then(() => scheme);
}