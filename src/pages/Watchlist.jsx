import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import DashboardPage from '../components/Dasboard/DashboardPage'
import TabsComponent from '../components/Dasboard/Tabs/TabsComponent'
import { allCoinData } from '../functions/getAllCoinData';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

function Watchlist() {
    const [coin, setCoin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const watchlistCoin = JSON.parse(localStorage.getItem('watchlist'));

    useEffect(() =>{
        getAllCoin();
    },[watchlistCoin,coin])

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
        
        {coin.length != 0 ?  (<TabsComponent  coins={coin}/>) : (<div className='flex flex-col justify-center items-center h-screen '>
          
            <div><h1 className='text-7xl text-blue font-semibold py-4'>No item </h1>
            </div>
            <Link to='/dashboard'><Button text={"dashboard"} /></Link>
          </div>)}

    </div>
  )
}

export default Watchlist