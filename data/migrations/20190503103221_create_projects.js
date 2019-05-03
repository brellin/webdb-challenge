exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('projects', col => {
            col.increments()

            col
                .string('name')
                .notNullable()
                .unique()

            col.text('description')

            col
                .boolean('completed')
                .notNullable()
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
