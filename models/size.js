'use strict'

const { bookshelf } = require('../db/database')

const Size = booshelf.Model.extend({
  tableName: 'sizes' 
})

module.exports = Size;
