// build your `Task` model here
const db = require('../../data/dbConfig.js')

const insert = async (task) => {
        return await db('tasks').insert(task)
}

const getById = async (id) => {
    return await db('tasks').where('task_id', id)
}
const getAll = async () => {
    const result = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', "t.project_id")
        .select('t.*', 'p.project_name', 'p.project_description')
    return result
}

const getProjectId = async (project_id) => {
    const projectIDS = await db('projects as p').where('p.project_id', project_id)
    return projectIDS
}

module.exports = {
    insert,
    getAll,
    getById,
    getProjectId
}