const { Router } = require('express');
const express = require('express');
const { registerMentor, mentorlogin } = require('../controllers/mentorControls');
const { registerUser, userlogin, createProfile } = require('../controllers/userControls')

const routeManager = express.Router()

routeManager.post('/', registerUser);
routeManager.post('/mentor', registerMentor);
routeManager.post('/login', userlogin);
routeManager.post('/loginmentor', mentorlogin);
routeManager.post('/editProfile/:id', createProfile);




module.exports={routeManager}