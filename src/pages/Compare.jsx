import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import SelectCoin from '../components/Compare/SelectCoin/SelectCoin'
import SelectDays from '../components/Coin/SelectDays/SelectDays'
import { getCoinData } from '../functions/getCoinData'
import { coinObject } from '../functions/convertObject'
import { getCoinPrices } from '../functions/getCoinPrice'
import { settingChartData } from '../functions/settingChartData'
import Loader from '../components/Common/Loader/Loader'
import List from '../components/Dasboard/List/List'
import CoinInfo from '../components/Coin/CoinInfo/CoinInfo'
import LineChart from '../components/Coin/LineChart/LineChart'
import PriceToggle from '../components/Coin/PriceType/PriceToggle'

function Compare() {
    const [crypto1, setCrypto1] = useState("bitcoin")
    const [crypto2, setCrypto2] = useState("ethereum")
    const [crypto1Data, setCrypto1Data] = useState({})
    const [crypto2Data, setCrypto2Data] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [chartData, setChartData] = useState({})
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState('prices');

    const handleDays = async (e) => {
        setIsLoading(true);
        console.log(e.target.value);
        setDays(e.target.value);
        const prices1 = await getCoinPrices(crypto1, e.target.value, "prices");
        const prices2 = await getCoinPrices(crypto2, e.target.value, "prices");
        if (prices1 && prices2) {
            console.log(prices1);
            settingChartData(setChartData, prices1, prices2)
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getData()
    }, [crypto1, crypto2,priceType])
    async function getData() {
        setIsLoading(true);
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);
        if (data1) {
            coinObject(setCrypto1Data, data1);

        }
        if (data2) {
            coinObject(setCrypto2Data, data2);

        }
        if (data1 && data2) {
            const prices1 = await getCoinPrices(crypto1, days, priceType);
            const prices2 = await getCoinPrices(crypto2, days, priceType);
            if (prices1 && prices2) {
                console.log(prices1);
                settingChartData(setChartData, prices1, prices2)
                setIsLoading(false);
            }
        }
    }
    const handlePriceChanges = (e) => {
        setPriceType(e.target.value);
        console.log(e.target.value);
    }

    const handleCoinChange = async (e, isCoin2) => {
        setIsLoading(true);
        if (isCoin2) {
            setCrypto2(e.target.value);
            const data = await getCoinData(e.target.value);
            if (data) {
                coinObject(setCrypto2Data, data);
                const prices = getCoinPrices(e.target.value, days, priceType);
                if (prices) {
                    setIsLoading(false);
                }
            }
        } else {
            setCrypto1(e.target.value);
            const data = await getCoinData(e.target.value);
            if (data) {
                coinObject(setCrypto1Data, data);
                const prices = getCoinPrices(e.target.value, days, priceType);
                if (prices) {
                    setIsLoading(false);
                }
            }
        }
    }
    return (
        <div >
            <Header />
            {isLoading ? (<Loader />) :
                (
                    <>
                        <div className='flex flex-wrap justify-start items-center'>
                            <SelectCoin crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} />
                            <SelectDays days={days} handleDaysChanges={handleDays} noPtag={true} />
                        </div>
                        <div className='block mx-auto w-11/12 px-2 bg-darkgrey m-6 rounded-xl'>
                            <List coin={crypto1Data} />
                        </div>
                        <div className='block mx-auto w-11/12 px-2 bg-darkgrey m-6 rounded-xl'>
                            <List coin={crypto2Data} />
                        </div>
                        <div className='block mx-auto w-11/12 px-2 bg-darkgrey m-6 rounded-xl' >
                            <div className='py-4'>
                            <PriceToggle priceType={priceType} handlePriceChanges={handlePriceChanges}/>
                            </div>
                            <LineChart chartData={chartData} priceType={'prices'} multiAxis={true} />
                        </div>
                        <div>
                            <CoinInfo heading={crypto1Data?.name} desc={crypto1Data?.desc} />
                            <CoinInfo heading={crypto2Data?.name} desc={crypto2Data?.desc} />
                        </div>
                    </>

                )}
        </div>
    )
}

export default Compare