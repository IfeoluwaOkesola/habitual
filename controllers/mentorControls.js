const mentor = require("../model/mentorModel");
const { createMentorService } = require("../service/userService");
const dotenv = require('dotenv')
dotenv.config()
const bcrypt = require ('bcrypt')
const saltRounds = 10
const secret = process.env.SECRET

const registerMentor = async (req,res)=>{
    const {fullname, email, password} = req.body;
if (fullname && email && password){
    const emailCheck = await mentor.findOne({
        email: email
    })
    if (emailCheck){
        res.status(200).json({message: 'user already exist'})
    }else{
        const hash = bcrypt.hashSync(password, saltRounds);
        const result = await createMentorService({fullname, email, password:hash})
        if(result){
            res.status(200).json({message: result})
        }else{
            res.staus(200).json({message: console.error()})
        }
    }
}else{
    res.status(200).json({message: 'enter user details'})
}
   
}


module.exports = {registerMentor}
