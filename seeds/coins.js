require('dotenv/config');
const mongoose = require('mongoose');
const coinModel = require('../models/coin.model');
const CoinInfo = require('../services/coinApi.service');

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        const dbName = x.connections[0].name;
        console.log(`Connected to Mongo! Database name: "${dbName}"`);
    })
    .then(() => {
        return CoinInfo
            .getOneCoin(id)
    })
    .then((data) => {
        return coinModel
            .create(data)
    })
    .then(() => {
        console.log('created')
    })
    .catch((err) => console.log(err))
    .finally(() => {
        mongoose.disconnect()
    })