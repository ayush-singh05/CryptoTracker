import React, { useEffect, useState } from 'react'
import Header from '../Common/Header/Header'
import TabsComponent from './Tabs/TabsComponent'
import axios from "axios";

function DashboardPage() {
    const [coin,setCoin] = useState([]);

    useEffect(() =>{
       axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=100&page=1&sparkline=false',{
        headers: {
          'Authorization': `x-api-key ${'CG-eXp3Cgon4EWmEhhw2HD1Cres'}`  
        }
       }).then(response => {
        setCoin(response.data);
        console.log(response);
      })
      .catch(error => {
       
        console.error('Error:', error);
      });
    },[])
  return (
    <div >
        <Header/>
        <TabsComponent coins={coin}/>
    </div>
  )
}

export default DashboardPage