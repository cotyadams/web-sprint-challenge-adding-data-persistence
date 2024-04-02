exports.seed = function (knex, promise) {
    return knex('projects').insert([
        {
            project_name: 'john dee',
            project_description: 'rhymy and fun to listen to',
            project_completed: true
        },
        {
            project_name: 'hellrap',
            project_description: 'ottowa praga warzawa thessalanikki'
        }
    ])
}