'use strict'

const { bookshelf } = require('../db/database')

const Customer = bookshelf.Model.extend({
  tableName: 'customers' 
})

module.exports = Customer;
