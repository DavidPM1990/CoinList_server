const axios = require('axios')

class CoinInfo {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://coingecko.p.rapidapi.com',
            headers: {
                'X-RapidAPI-Key': '83fd3013e4msh9e60b7b2bb5e501p1f093djsn8409fbf3cdf1',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
        })
    }

    getCoinList() {
        return this.axios.get(`/coins/markets?vs_currency=eur&price_change_percentage=24h&price_change_percentage=1h`)
            .then((res) => res.data)
            .catch(e => console.log(e))
    }

    getOneCoin(id) {
        return this.axios.get(`/coins/${id}`)
            .then((res) => res.data)
            .catch(e => console.log(e))

    }

    getChart(id, days = 30) {
        return this.axios.get(`/coins/${id}/market_chart?vs_currency=eur&days=${days}`)
            .then((res) => res.data)
            .catch(e => console.log(e))
    }
}

module.exports = new CoinInfo()