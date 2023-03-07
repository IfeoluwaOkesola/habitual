const mentor = require("../model/mentorModel");
const user = require("../model/userModel");
const bcrypt = require('bcrypt');


async function createUserService(newUser){
    try {
        const userCreated = await user.create(newUser)
        return userCreated
    } catch (error) {
        console.log(error)
        return 'not created'
    }
}

async function createMentorService(newUser){
    try {
        const userCreated = await mentor.create(newUser)
        return userCreated
    } catch (error) {
        console.log(error)
        return 'not created'
    }
}


async function createLoginService(newUser){
    try {
        const result = await user.findOne({email:email})
        if (result){
            const valid = await bcrypt.compare(password, result.password);
            return valid;
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {createUserService, createMentorService, createLoginService}