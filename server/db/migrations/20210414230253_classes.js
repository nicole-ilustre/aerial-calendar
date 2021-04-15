exports.up = function(knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id')
    table.string('title')
    table.string('day')
    table.string('teacher')
    table.string('description')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('classes')
};
