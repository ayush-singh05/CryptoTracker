import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/',
    headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-eXp3Cgon4EWmEhhw2HD1Cres'
    }
});

export const allCoinData = async () => {
    try {
        const response = await axiosInstance.get(`markets?vs_currency=usd&order=volume_desc&per_page=100&page=1&sparkline=false`);
        console.log('Data fetched successfully:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
        throw error;
      }
}