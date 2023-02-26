const { Router } = require('express');
const express = require('express');
const { registerMentor } = require('../controllers/mentorControls');
const { registerUser } = require('../controllers/userControls')
const routeManager = express.Router()

routeManager.post('/', registerUser);
routeManager.post('/mentor', registerMentor)




module.exports={routeManager}