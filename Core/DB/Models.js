"use strict";
var mongoose = redquire('mongoose'),
  Schema = mongoose.Schema;

var eventSchema = new Schema({
  admins: [Schema.Types.ObjectId],
  name: String,
  place: {
      type: 'String',
      coordinates:  [Number]
  },
  timeCard:{
      start: Date,
      end: Date,
      Schedule: Object
  },
  subscribedUsers: [Schema.Types.ObjectId],
  groupRestriction: [Schema.Types.Number],
  Tags:[String]
});

var userSchema = new Schema({
  userName: {type: String, index: { unique: true }},
  email:{ type: String, index: { unique: true } },
  name: {
      firstName: String,
      lastName: String
  },

  password: {
      password: String,
      hash: String
  },
  createdOn: { type: Date, default: Date.now },
  groups: [Number],
  admin: Boolean
});

var groupSchema = new Schema({
    _id: Number,
    name: String
});

var gallerySchema = new Schema({
    event: Schema.Types.ObjectId,
    name: String,
    Split: {
        partNumber: Nubmer,
        TotalParts: Nubmer
    },
    Image: { data: Buffer, contentType: String }
});

module.exports.event = mongoose.model('event', eventSchema);
module.exports.user = mongoose.model('user', userSchema);
module.exports.group = mongoose.model('group', groupSchema);
module.exports.gallery = mongoose.model('gallery', gallerySchema);