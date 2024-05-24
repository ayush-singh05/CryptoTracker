import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Common/Header/Header';
import axios from 'axios'
import Loader from '../Common/Loader/Loader';
import { coinObject } from '../../functions/convertObject';
import List from '../Dasboard/List/List';
import CoinInfo from './CoinInfo/CoinInfo';
import { getCoinData } from '../../functions/getCoinData';
import { getCoinPrices } from '../../functions/getCoinPrice';

function Coin() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coin, setCoin] = useState();
  const [days,setDays] = useState(30)

  useEffect(() => {
    if( id){
      getData(id);
    }
  }, [id]);

async function getData(id) {
  const data = await getCoinData(id);
  if(data) {
    coinObject(setCoin, data);
    const prices = await getCoinPrices(id,days);
    if(prices) {
      setIsLoading(false)
    }
  }
}
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
              <CoinInfo heading={coin.name} desc={coin.desc} />
          </div>

        )}
    </div>
  )
}

export default Coin