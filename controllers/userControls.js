const user = require("../model/userModel");
const { createUserService } = require("../service/userService");
const bcrypt = require('bcrypt');
const saltRounds = 10
const validator = require('validator');
const dotenv = require ('dotenv')
dotenv.config()
const secret = process.env.secret

const registerUser = async (req,res)=>{
    const {fullname, email, password} = req.body;
if (fullname && email && password){
    const emailCheck = await user.findOne({
        email: email
    })
    if (emailCheck){
        res.status(200).json({message: 'user already exist'})
    }else{
        const hash = bcrypt.hashSync(password, saltRounds);
        const result = await createUserService({fullname, email, password:hash})
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





module.exports= {registerUser}