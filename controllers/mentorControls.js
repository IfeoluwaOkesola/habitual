const mentor = require("../model/mentorModel");
const { createMentorService } = require("../service/userService");
const dotenv = require('dotenv')
dotenv.config()
const bcrypt = require ('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
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


const mentorlogin = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const result = await mentor.findOne({
        email: email,
      });
      if (result) {
        console.log(result);
        const valid = bcrypt.compare(password, result.password);
        if (valid) {
          const token = jwt.sign({ result }, secret);
          res.status(200).json({ message: token });
          //console.log(result)
        } else {
          res.json({ message: 'incorrect password' });
          console.log('incorrect password');
        }
      } else {
        res.json({ message: 'user not found' });
      }
    } else {
      res.json({ message: 'enter user details' });
      console.log('enter user details');
    }
  };
  

module.exports = {registerMentor, mentorlogin}
