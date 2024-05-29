import React, { useState } from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';;
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { addToWatchList } from '../../../functions/addToWatchList';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { hasAdded } from '../../../functions/hasWatchListAdded';

function Grid({ coin }) {
    // localStorage.setItem('mycoin',[coin.id]);
    const [added, setAdded] = useState(hasAdded(coin.id));
    
    const handleWatchListAdded = (e) => {
        
        e.preventDefault();
            if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchList(coin.id);
                setAdded(true);
              }
    }
    
   
    return (

        <div className={`w-80 cursor-pointer h-72 rounded-lg bg-darkgrey border-2 border-darkgrey ${coin.price_change_percentage_24h > 0 ? 'hover:border-green' : 'hover:border-red'} transition-all duration-300 ease-in`}>
            <div className='flex justify-between items-center gap-4 my-4 mx-6  '>
                <Link to={`/coin/${coin.id}`}>
                    <div className='flex justify-start items-center gap-4 '>
                        <img className='h-14 w-14 ' src={coin.image} alt="" />

                        <div className='flex flex-col '>
                            <p className='text-white uppercase font-semibold text-base m-0'>{coin.symbol}</p>
                            <p className='text-grey capitalize font-normal m-0 text-xs '>{coin.name}</p>
                        </div>
                    </div>
                </Link>
                <div onClick={handleWatchListAdded} >

                    {added ? <StarIcon fontSize='large' sx={{ color: '#d89911' }} /> : <StarBorderOutlinedIcon fontSize='large' sx={{ color: '#d89911' }} />}
                </div>
            </div>
            <Link to={`/coin/${coin.id}`}>
                <div className='flex justify-start items-center gap-4 my-4 mx-6 '>
                    <div className={`${coin.price_change_percentage_24h > 0 ? ' border-green hover:bg-green hover:text-white ease-in duration-300 text-green ' : ' border-red hover:bg-red hover:text-white ease-in duration-300 text-red '}  border-2 rounded-3xl px-5 py-1 text-base font-semibold`}>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className={`${coin.price_change_percentage_24h > 0 ? ' border-green hover:bg-green hover:text-white ease-in duration-300 text-green ' : ' border-red hover:bg-red hover:text-white ease-in duration-300 text-red '}  flex items-center justify-center h-8 w-8 border-2 text-base rounded-full`}>{coin.price_change_percentage_24h > 0 ? <TrendingUpRoundedIcon /> : <TrendingDownRoundedIcon />}</div>
                </div>
                <div className='m-6 '>
                    <h3 className={`${coin.price_change_percentage_24h > 0 ? 'text-green' : 'text-red'}`}>${coin.current_price.toLocaleString()}</h3>
                    <p className='text-grey text-sm mt-5 mb-2'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                    <p className='text-grey text-sm '>Market Cap : ${coin.market_cap.toLocaleString()}</p>
                </div>
            </Link>
        </div>

    )
}

export default Grid;