exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('orders', t => {
      t.increments();
      t.string('name');
      t.string('email');
      t.integer('phone');
      t.integer('size');
      t.specificType('topping', knex.raw('text[]')).notNullable().defaultTo('{"cheese"}');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('orders')
};
