
exports.up = (knex) => knex.schema.createTable('comments', (table) => {
  table.increments();
  table.string('text', 1024).notNullable();
});

exports.down = (knex) => knex.schema.dropTable('comments');
