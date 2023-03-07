const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

const maxAge = 3* 24 * 60 * 60;

const createToken = (id)=>{
    return jwt.sign({id}, secret, {expiresIn: maxAge})
}

module.exports = {createToken, maxAge}