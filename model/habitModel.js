const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  userid:{
    type: mongoose.Schema.Types.ObjectId, ref:'user',
    required: true
  },
   category: {
    type: String,
    required: true,
  },

body: [{
    type: String,
    required: true,
    
  }]
});

const habit = mongoose.model('habit', habitSchema);

module.exports = habit;
