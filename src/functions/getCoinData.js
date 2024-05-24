import axios from "axios"

export const getCoinData = (id) => {

    return axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
        headers: {
            'Authorization': `x-api-key ${'CG-eXp3Cgon4EWmEhhw2HD1Cres'}`
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        console.error('Error:', error);
    });
}