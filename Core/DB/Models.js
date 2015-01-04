(function(){
  "use strict";
  var mongoose = redquire('mongoose'),
      Schema = mongoose.Schema;

  var eventSchema = new Schema({
    'admin': [String],
    'name': String,
    'startDate': Date,
    'endDate': Date
  });

  var userSchema = new Schema({
      userName: String,
      name: {firstName: String, lastName: String},
      email: String,
      password: {password: String, hash: String},
      createdOn: { type: Date, default: Date.now }
  });

  module.exports.eventModel = mongoose.model('event', eventSchema);
  module.exports.userModel = mongoose.model('user', userSchema);
})();
