'use strict'

const { bookshelf } = require('../db/database')

const Topping = booshelf.Model.extend({
  tableName: 'toppings' 
})

module.exports = Topping;
