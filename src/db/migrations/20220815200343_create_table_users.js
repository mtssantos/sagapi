
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('id')
    table.text('name')
    table.text('username')
    table.text('secretkey')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
