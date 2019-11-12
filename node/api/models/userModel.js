'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the user'
  },
  mobile: {
    type: String,
    required: 'Kindly enter the mobile of the user'
  },
  email: {
    type: String,
    required: 'Kindly enter the email of the user'
  },
  password: {
    type: String,
    required: 'Kindly enter the password of the user'
  },
  image: {
    type: String,
  },
  status: {
    type: Number,
    required: 'Kindly enter the status of the user',
    default: '1'
  },
});

module.exports = mongoose.model('user', UserSchema);