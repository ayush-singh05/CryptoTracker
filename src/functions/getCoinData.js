import axios from "axios"

  const axiosInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3', 
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-eXp3Cgon4EWmEhhw2HD1Cres'
    }
  });

export const getCoinData = async (id) => {

    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        // console.log('Data fetched successfully:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
        throw error;
      }
}