import { useEffect, useState } from 'react'
import Header from '../Common/Header/Header'
import TabsComponent from './Tabs/TabsComponent'
import axios from "axios";
import Search from './Search/Search';
import PaginationControlled from './Pagination/Pagination';
import Loader from '../Common/Loader/Loader';
import BackToTop from '../Common/BackToTop/BackToTop';
import { allCoinData } from '../../functions/getAllCoinData';

function DashboardPage() {
  const [coin, setCoin] = useState([]);
  const [paginatedCoin, setPaginatedCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    getAllCoin();
  }, []);

  const getAllCoin = async () => {
    const data = await allCoinData();
    if (data) {
      setCoin(data);
      setPaginatedCoin(data.slice(0, 10));
      setIsLoading(false);
    }
  }

  const onSearchChange = (e) => {

    setSearch(e.target.value);
  }

  const handleChange = (event, value) => {
    setPage(value)
    let previousCoinIdx = (value - 1) * 10;
    setPaginatedCoin(coin.slice(previousCoinIdx, previousCoinIdx + 10));
  };

  let filteredCoin = coin.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

  return (
    <div >
      <Header />
      <BackToTop />
      {isLoading ? (<Loader />) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoin : paginatedCoin} />
          {!search && <PaginationControlled page={page} handleChange={handleChange} />}
        </div>
      )}

    </div>
  )
}

export default DashboardPage