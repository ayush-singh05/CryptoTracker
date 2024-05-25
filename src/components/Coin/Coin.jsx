import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Common/Header/Header';
import Loader from '../Common/Loader/Loader';
import { coinObject } from '../../functions/convertObject';
import List from '../Dasboard/List/List';
import CoinInfo from './CoinInfo/CoinInfo';
import { getCoinData } from '../../functions/getCoinData';
import { getCoinPrices } from '../../functions/getCoinPrice';
import LineChart from './LineChart/LineChart';
import SelectDays from './SelectDays/SelectDays';
import { settingChartData } from '../../functions/settingChartData';
import { convertDate } from '../../functions/convertDate';



function Coin() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coin, setCoin] = useState();
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({labels:[],datasets:[]});

  useEffect(() => {
    if (id) {
      getData(id); 
      
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchPrices(id, days);
    }
  }, [id, days]);

  async function getData(id) {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoin, data);
      console.log("getData");
      // setIsLoading(false)
      
    }
  }

  const fetchPrices = async (id, days) => {
    try {
      setIsLoading(true);
      const prices = await getCoinPrices(id, days);
      console.log("Prices fetched successfully:", prices);
      if (prices) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      } else {
        console.error("No prices data found for ID:", id, "and days:", days);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching prices:", error);
      setIsLoading(false);
    }
  };
  const handleDaysChanges = async (event) => {
    const selectedDays = event.target.value;
    setDays(selectedDays);
  };


  return (
    <div>
      <Header />
      {isLoading ? (<Loader />) :
        (
          <div>
            <div
              className='block mx-auto w-11/12 px-2 bg-darkgrey m-6 rounded-xl'>
              <List coin={coin} />
            </div>
            <div className='block mx-auto w-11/12 px-2 bg-darkgrey m-6 rounded-xl'>
              <SelectDays days={days} handleDaysChanges={handleDaysChanges} />
             <LineChart chartData={chartData}/>
            </div>
            <CoinInfo heading={coin.name} desc={coin.desc} />
            
          </div>

        )}
    </div>
  )
}

export default Coin