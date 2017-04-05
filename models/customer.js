'use strict'

const { bookshelf } = require('../db/database')

const Customer = booshelf.Model.extend({
  tableName: 'customers' 
})

module.exports = Customer;
