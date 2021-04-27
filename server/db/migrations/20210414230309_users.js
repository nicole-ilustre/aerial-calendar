exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('username')
    table.binary('hash')
    table.string('Monday')
    table.string('Tuesday')
    table.string('Wednesday')
    table.string('Thursday')
    table.string('Friday')
    table.string('Saturday')
    table.string('Sunday')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
