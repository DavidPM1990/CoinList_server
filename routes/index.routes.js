const router = require("express").Router();
const { getAllCoins } = require('../controller/allCoins.controller');
const { getDetails, obtainChart } = require('../controller/coinDetails.controller');
require('mongoose')

// -----------------------GET------------------------------------------------
router.get("/home", getAllCoins)
router.get('/chart/:id', obtainChart)
router.get('/details/:id', getDetails)

// ----------------------------POST--------------------------------------------

module.exports = router;











