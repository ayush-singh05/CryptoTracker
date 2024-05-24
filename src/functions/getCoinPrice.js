import axios from "axios"

export const getCoinPrices = (id,days) => {

    return axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`, {
        headers: {
            'Authorization': `x-api-key ${'CG-eXp3Cgon4EWmEhhw2HD1Cres'}`
        }
    }).then(response => {
        return response.data.prices
    }).catch(error => {
        console.error('Error:', error);
    });
}