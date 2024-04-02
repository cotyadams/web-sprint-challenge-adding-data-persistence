// build your `Project` model here
const db = require('../../data/dbConfig.js')

const insert = async (project) => {
    return await db('projects').insert(project)
}

const getById = async (id) => {
    return await db('projects').where('project_id', id)
}
const getAll = async (id) => {
    return await db('projects')
}

module.exports = {
    insert,
    getById,
    getAll
}

