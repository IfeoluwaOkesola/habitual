const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  profilePicture: {
    type: String
  },

  phoneNo: {
    type: Number
  },

  birthday: {
    type: Date
  },

  gender: {
    type: String
  },

  country: {
    type: String
  },

  city: {
    type: String
  }

  

});

const profile = mongoose.model('profile', profileSchema);

module.exports = profile;
