
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('customers', t => {
      t.string('email').notNullable();
      t.string('password').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('customers')
};
