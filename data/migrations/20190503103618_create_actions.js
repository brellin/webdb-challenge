exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('actions', col => {
            col.increments()

            col
                .integer('pj_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            col
                .text('description')
                .notNullable()
                .unique()

            col.text('notes')

            col.boolean('completed')
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
