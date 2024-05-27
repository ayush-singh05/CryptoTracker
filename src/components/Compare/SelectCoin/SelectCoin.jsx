import React, { useEffect, useState } from 'react'
import { allCoinData } from '../../../functions/getAllCoinData'
import { MenuItem, Select } from '@mui/material';
import { Padding, PaddingOutlined } from '@mui/icons-material';

function SelectCoin({crypto1, crypto2, handleCoinChange}) {
    
    const [allCoins,setAllcoins] = useState([]);

    const style = {

        height: "2.5rem",
        color: "var(--white)",
        mr: 2,
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
            
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
           
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    }

    // const handleCoinChange = (event,isCrypto2) => {
    //     if(isCrypto2){
    //         setCrypto2(event.target.value);
    //     console.log(event.target.value);
    //     }else{
    //         setCrypto1(event.target.value);
    //         console.log(event.target.value);
    //     }
    // }
    useEffect(() =>{
        getData();
    },[]);

    const getData = async () => {
        const myCoin = await allCoinData();
        setAllcoins(myCoin);
    }
    return (
        <div className='flex justify-start items-center p-4 text-white' >
            <p className='mx-4 max-md:hidden'>Crypto 1</p>
            <Select
                sx={style}
                value={crypto1}
                label='days'
                onChange={(e) => handleCoinChange(e,false)}
            >
                {allCoins.filter((item) => item.id !== crypto2).map((coin,idx) => (
                    <MenuItem key={idx} value={coin.id}>{coin.name}</MenuItem>
                ))}
               
            </Select>

            <p className='mx-4 max-md:hidden'>Crypto 2</p>
            <Select
                sx={style}
                value={crypto2}
                label='days'
                onChange={(e) => handleCoinChange(e,true)}
            >
                {allCoins.filter((item) => item.id !== crypto1).map((coin,idx) => (
                    <MenuItem value={coin.id}>{coin.name}</MenuItem>
                ))}
               
            </Select>

        </div>
    );
}

export default SelectCoin