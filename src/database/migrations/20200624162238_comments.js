
exports.up = (knex) => knex.schema.createTable('comments', (table) => {
  table.string('id').primary()
  table.string('text').notNullable()
})

exports.down = (knex) => knex.schema.dropTable('comments')
