import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import DashboardPage from '../components/Dasboard/DashboardPage'
import TabsComponent from '../components/Dasboard/Tabs/TabsComponent'
import { allCoinData } from '../functions/getAllCoinData';

function Watchlist() {
    const [coin, setCoin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const watchlistCoin = JSON.parse(localStorage.getItem('watchlist'));
    
    useEffect(() =>{
        getAllCoin();
    },[watchlistCoin])

    const getAllCoin = async () => {
        const data = await allCoinData();
        if (data) {
          setCoin(data.filter((item) => watchlistCoin.includes(item.id)));
          setIsLoading(false);
        }
      }

  return (
    <div>
        <Header/>
        <TabsComponent  coins={coin}/>

    </div>
  )
}

export default Watchlist