exports.up = function(knex) {
    return knex.schema.createTable('author', function(table){
        table.increments();
        table.string('firstName');
        table.string('lastName').notNullable();
        table.string('urlToPage').notNullable();
        table.string('country');
        table.integer('birthYear');
        table.integer('deathYear');
        table.boolean('isAnonymous').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('author');
};