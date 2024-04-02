exports.seed = function (knex, promise) {
    return knex('project_resources').insert([
        {
            project_id: 1,
            resource_id: 2
        },
        {
            project_id: 2,
            resource_id: 1
        }
    ])
}