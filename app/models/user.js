var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var URLs = require('./link.js');


var User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,
  links: function() {
    return this.hasMany(URLs);
  },
  initialize: function(){
   // hash the pw before its saved to the database
   // salt?
  }
});

module.exports = User;
