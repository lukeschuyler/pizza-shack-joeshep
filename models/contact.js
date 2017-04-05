'use strict'

const { bookshelf } = require('../db/database')

const Contact = booshelf.Model.extend({
  tableName: 'contacts' 
})

module.exports = Contact;
