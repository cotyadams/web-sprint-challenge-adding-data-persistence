exports.seed = function (knex, promise) { 
    return knex('task').insert([
        {
            task_description: 'add instrumentals',
            task_notes: 'dont forget the drums',
            task_completed: true,
            project_id: 1
        },
        {
            task_description: 'add vocals',
            task_notes: 'dont forget the featuring artist',
            project_id: 2
        },
        {
            task_description: 'add chorus',
            project_id: 2
        }
    ])
}