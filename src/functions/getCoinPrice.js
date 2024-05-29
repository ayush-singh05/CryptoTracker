import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/', 
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-eXp3Cgon4EWmEhhw2HD1Cres'
    }
  });

export const getCoinPrices = async (id,days,priceType) => {
    try {
        const response = await axiosInstance.get(`${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
        // console.log('Data fetched successfully:', response.data[priceType]);
        return response.data[priceType];
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
        throw error;
      }
}