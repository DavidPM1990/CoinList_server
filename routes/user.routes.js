const express = require('express');
const router = express.Router();
const { createUser,
    findProfile,
    updateProfile,
    // GetUser
} = require('../controller/user.controller');
const validateToken = require('../middleware/validateToken.middleware');

// ------------------------- GET ---------------------------- 

// router.get('/user', GetUser);

// ------------------------ POST ----------------------------

router.post('/login', findProfile)

router.post('/create', createUser);

router.put("/users/:id", validateToken, updateProfile);


module.exports = router;