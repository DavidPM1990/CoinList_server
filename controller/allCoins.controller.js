const CoinInfo = require('../services/coinApi.service');



const getAllCoins = (req, res, next) => {
    CoinInfo
        .getCoinList()
        .then(data => {

            res.json(data);
        })
}

module.exports = { getAllCoins }
