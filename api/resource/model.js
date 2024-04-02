// build your `Resource` model here
const db = require('../../data/dbConfig.js')

const insert = async (resource) => {
        return await db('resources').insert(resource)
}

const getById = async (id) => {
    return await db('resources').where('resource_id', id)
}
const getAll = async () => {
    const result = await db('resources')
    return result
}

module.exports = {
    insert,
    getAll,
    getById
}