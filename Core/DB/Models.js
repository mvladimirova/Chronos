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

  module.exports.eventSchema = eventSchema;
})();
