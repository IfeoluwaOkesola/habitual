const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userid:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        required: true
  },
  profilePicture: {
    type: String
  },

  phoneNo: {
    type: Number
  },

  birthday: {
    type: String
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
