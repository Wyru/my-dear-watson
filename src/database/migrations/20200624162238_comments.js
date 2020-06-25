
exports.up = (knex) => knex.schema.createTable('comments', (table) => {
  table.increments();
  table.string('text').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('comments');
