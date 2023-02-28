const mongoose = require('mongoose');
const validator = require('validator');
const profile = require('./profileModel');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'please enter a valid email'],
  },

  password: {
    type: String,
    required: true,
  },

//   profile: {
//     type: mongoose.Schema.Types.ObjectId, ref: 'profile'
//   }

  

});

const user = mongoose.model('user', userSchema);

module.exports = user;
