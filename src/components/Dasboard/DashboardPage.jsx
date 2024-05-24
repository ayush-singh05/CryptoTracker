import { useEffect, useState } from 'react'
import Header from '../Common/Header/Header'
import TabsComponent from './Tabs/TabsComponent'
import axios from "axios";
import Search from './Search/Search';
import PaginationControlled from './Pagination/Pagination';
import Loader from '../Common/Loader/Loader';
import BackToTop from '../Common/BackToTop/BackToTop';

function DashboardPage() {
    const [coin,setCoin] = useState([]);
    const [paginatedCoin,setPaginatedCoin] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const onSearchChange = (e) => {
      
      setSearch(e.target.value);
    }

    const handleChange = (event, value) => {
      setPage(value)
      let previousCoinIdx = (value - 1) * 10;
      setPaginatedCoin(coin.slice(previousCoinIdx,previousCoinIdx+10));
    };

    let filteredCoin = coin.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

    useEffect(() =>{
       axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=100&page=1&sparkline=false',{
        headers: {
          'Authorization': `x-api-key ${'CG-eXp3Cgon4EWmEhhw2HD1Cres'}`  
        }
       }).then(response => {
        setCoin(response.data);
        setPaginatedCoin(response.data.slice(0,10));
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
    },[])
  return (
    <div >
        <Header/>
        <BackToTop/>
        {isLoading ? (<Loader/>) :(
          <div>
          <Search search={search} onSearchChange={onSearchChange}/>
          <TabsComponent coins={search ? filteredCoin : paginatedCoin}/>
          {!search && <PaginationControlled page={page} handleChange={handleChange}/> }
          </div>
        )}

    </div>
  )
}

export default DashboardPage