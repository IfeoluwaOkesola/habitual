const mentor = require("../model/mentorModel");
const user = require("../model/userModel");

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



module.exports = {createUserService, createMentorService}