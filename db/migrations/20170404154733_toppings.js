exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('toppings', t => {
      t.increments();
      t.string('name').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
     .dropTable('toppings')
};
