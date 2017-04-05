
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('contacts', t => {
      t.increments()
      t.string('name').notNullable().unique();
      t.string('email').notNullable();
      t.string('phone').notNullable();
      t.string('message').notNullable(); 
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('contacts')
};
