const mongoose = require('mongoose');
const validator = require('validator');

const mentorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'please enter a valid email address']
    },

    password: {
        type: String,
        required: true,
    }
})


const mentor = mongoose.model('mentor', mentorSchema)

module.exports = mentor;