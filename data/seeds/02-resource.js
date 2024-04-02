exports.seed = function (knex, promise) {
    return knex('resources').insert([
        {
            resource_name: 'spotify',
            resource_description: 'the green one'
        },
        {
            resource_name: 'apple music',
            resource_description: 'the red one'
        }
    ])
}