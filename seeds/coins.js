require('dotenv/config');
const mongoose = require('mongoose');
const coinModel = require('../models/coin.model');
const CoinInfo = require('../services/coinApi.service');

const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/backend-coinlist";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        const dbName = x.connections[0].name;
        console.log(`Connected to Mongo! Database name: "${dbName}"`);
    })
    .then(() => {
        return CoinInfo
            .getCoinList()
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