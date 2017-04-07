'use strict';

const { User } = require('../models/user')

module.exports.show = (req, res) => {
  res.render('register', { page: 'Register' });
}

module.exports.create = ({ body: {email,password,confirmation}}, res) => {
  if(password === confirmation) {
    User.findOneByEmail(email)
      .then(user => {
        if(user) 
          return res.render('register', { msg: 'Email is already registered' })
        return User.forge({email, password}).save()
        .then(() => {
          res.redirect('/')
        })
        .catch(err =>  res.render('register', { msg: 'Dang Bro, problem try agin' }))
      })
      .catch(err => res.render('register', { msg: 'Dang Bro, problem try agin' }))
  } else {
    res.render('register', { msg: 'Oops, password and confirmation don\'t match' })
  }
}
