(function(){
  "use strict";
  var Schema = require('mongoose').Schema;

  var eventSchema = new Schema({
    'Admin': [String],
    'Name': String,
    'StartDate': Date,
    'EndDate': Date,
    'Sport': String
  });

  var userSchema = new Schema({
      '_id': String,
      'FirstName': String,
      'LastName': String
  })

  module.exports.eventSchema = eventSchema;
  module.exports.userSchema = userSchema;
})();
