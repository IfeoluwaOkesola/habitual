const user = require('../model/userModel');
const {
  createUserService,
  createLoginService,
} = require('../service/userService');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

//const validator = require('validator');
const dotenv = require('dotenv');
const { createToken, maxAge } = require('../service/tokenService');
const profile = require('../model/profileModel');
dotenv.config();
const secret = process.env.secret;

const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  if (fullname && email && password) {
    const emailCheck = await user.findOne({
      email: email,
    });
    if (emailCheck) {
      res.status(200).json({ message: 'user already exist' });
    } else {
      const hash = bcrypt.hashSync(password, saltRounds);
      const result = await createUserService({
        fullname,
        email,
        password: hash,
      });
      if (result) {
        res.status(200).json({ message: 'user created' });
      } else {
        res.staus(200).json({ message: console.error() });
      }
    }
  } else {
    res.status(200).json({ message: 'enter user details' });
  }
};

const userlogin = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const result = await user.findOne({
      email: email,
    });
    if (result) {
      //console.log(result);
      const valid = await bcrypt.compare(password, result.password);

      if (valid) {
        const token = createToken(result._id);
        res.cookie('jwt', token, { httpOnly: false, sameSite:'None', secure: true,maxAge: maxAge * 1000});
        res.status(200).json({ user: result._id });
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

const createProfile = async (req, res) => {
  //const profileUpdate = req.params.id;
  const newProfile = {
    userid: req.params.id,
    profilePicture: req.body.profilePicture,
    phoneNo: req.body.phoneNo,
    birthday:req.body.birthday,
    gender:req.body.gender,
    country: req.body.country,
    city: req.body.city
  };
  //const {userid, profilePicture, phoneNo, birthday, gender, country, city} = req.body
// const profileUpdate = await user.findOneAndUpdate({
//     _id: req.params.id
// })

// if(profileUpdate){

// }
  const profileCreate = await profile.create(newProfile);
  if (profileCreate) {
    try {
      res.status(200).json({ message: profileCreate });
    } catch (error) {
      res.status(404).json({ message: 'we have an error' });
      console.log(error);
    }
  } else {
    console.log('i am tired');
  }
};

module.exports = { registerUser, userlogin, createProfile };
