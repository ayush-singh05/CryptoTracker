import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/', 
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-eXp3Cgon4EWmEhhw2HD1Cres'
    }
  });

export const getCoinPrices = async (id,days) => {

    // return axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`, {
    //     headers: {
    //         accept: 'application/json',
    //         'x-cg-demo-api-key': 'CG-eXp3Cgon4EWmEhhw2HD1Cres'
    //     }
    // }).then(response => {
    //     return response.data.prices
    // }).catch(error => {
    //     console.error('Error:', error);
    // });
    
    try {
        const response = await axiosInstance.get(`${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
        console.log('Data fetched successfully:', response.data);
        return response.data.prices;
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
        throw error;
      }
}