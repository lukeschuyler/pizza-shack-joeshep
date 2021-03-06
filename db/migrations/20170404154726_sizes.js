exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('sizes', function(table){
      table.increments();
      table.string('name').notNullable().unique();
      table.integer('inches');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('sizes')
};
