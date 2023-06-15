const express = require('express');
const router = express.Router();
const { createUser,
    findProfile,
    updateProfile,
    // getFavCoins,
} = require('../controller/user.controller');
const validateToken = require('../middleware/validateToken.middleware');

// ------------------------- GET ---------------------------- 


// ------------------------ POST ----------------------------

router.post('/login', findProfile)

router.post('/create', createUser);

// router.get('/favorite-coins/:id', getFavCoins);




router.put("/users/:id", validateToken, updateProfile);


module.exports = router;