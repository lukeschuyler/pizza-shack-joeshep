
const { knex } = require('../database');
const sizes = require('./sizes');

const sizePromises = sizes.map( ({ name, inches }) => knex('sizes').insert({ name, inches }))


exports.seed = (knex, Promise) => {
  return knex('sizes').del()
    .then( () => {
      return Promise.all(sizePromises)
    });
};
