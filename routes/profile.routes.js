const router = require("express").Router();
const {
    GetUser,
    getFavCoins,
    updateFavCoins,
    deleteFavCoins,
} = require("../controller/user.controller")


router.get("/", GetUser)

router.get('/favorite-coins/:id', getFavCoins);

router.put("/favorite-coins/:id", updateFavCoins);

router.put("/favorite-coins/delete/:id", deleteFavCoins)



module.exports = router;
