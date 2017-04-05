'use strict'

const { bookshelf } = require('../db/database')

const Order = booshelf.Model.extend({
  tableName: 'orders' 
})

module.exports = Order;
