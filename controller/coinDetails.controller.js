const CoinInfo = require('./../services/coinApi.service')

const getDetails = (req, res, next) => {
    const { id } = req.params
    CoinInfo
        .getOneCoin(id)
        .then(({
            market_data: {
                current_price: { usd: currentPriceUsd },
                market_cap: { usd: marketCapUsd },
                total_volume: { usd: volumeUsd },
                price_change_24h,
                market_cap_rank,

            },
            name,
            symbol,
            description: { en },
            image: { small },

        }) => {
            res.send({
                id,
                small,
                name,
                symbol,
                en,
                price_change_24h,
                market_cap_rank,
                volumeUsd,
                marketCapUsd,
                currentPriceUsd
            })
        })
        .catch((err) => console.log(err))
}

const obtainChart = (req, res, next) => {
    const { id } = req.params;

    CoinInfo
        .getChart(id)
        .then(({
            prices,
            market_caps,
            total_volumes
        }) => {
            res.json({
                prices,
                market_caps,
                total_volumes
            })
        })
        .catch((err) => console.log(err))
}

module.exports = { getDetails, obtainChart }