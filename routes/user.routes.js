const express = require('express');
const router = express.Router();
const { createUser, findProfile, GetUser } = require('../controller/user.controller');

// ------------------------- GET ---------------------------- 

router.get('/get-profile', GetUser);

// ------------------------ POST ----------------------------

router.post('/get-user', findProfile)

router.post('/create-user', createUser);


module.exports = router;