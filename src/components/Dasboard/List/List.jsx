import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import formatNumber from '../../../functions/numberFormat';
import { Link } from 'react-router-dom';
function List({ coin }) {
    return (
        <Link to={`/coin/${coin?.id}`}>
        <tr className='flex  items-center justify-between cursor-pointer w-full py-4 px-6 max-md:px-2 rounded-2xl my-3 hover:bg-darkgrey transition-all duration-400 ease-out  '>
            <Tooltip title="Logo" placement="bottom-start">
                <td className='h-14 cursor-pointer w-14 max-w-14 max-md:max-w-12 '> <img className=' p-2' src={coin?.image} alt="" /></td>
            </Tooltip>

            <td className=''>
                <Tooltip title="Symbol" placement="bottom-start">
                    <p className='text-white cursor-pointer uppercase font-semibold text-xl max-md:text-sm '>{coin?.symbol}</p>
                </Tooltip>
                <Tooltip title="Name" placement="bottom-start">
                    <p className='text-grey cursor-pointer capitalize font-normal m-0 text-base max-md:text-xs '>{coin?.name}</p>
                </Tooltip>
            </td>


            <td className='flex justify-start gap-4 items-center    '>
                <div className={`${coin?.price_change_percentage_24h > 0 ? 'border-green hover:bg-green hover:text-white ease-in duration-300 text-green ' : ' border-red hover:bg-red hover:text-white ease-in duration-300 text-red '}  border-2 rounded-3xl  text-xl max-md:text-xs max-md:font-medium px-3 max-md:px-1 max-md:py-1 py-1`}>{coin?.price_change_percentage_24h?.toFixed(2)}%</div>
                <div className={`${coin?.price_change_percentage_24h > 0 ? 'border-green hover:bg-green hover:text-white ease-in duration-300 text-green ' : ' border-red hover:bg-red hover:text-white ease-in duration-300 text-red '} max-lg:hidden   flex items-center justify-center  border-2 text-base py-1 px-1 rounded-full`}>{coin?.price_change_percentage_24h > 0 ? <TrendingUpRoundedIcon /> : <TrendingDownRoundedIcon />}</div>
            </td>
            <Tooltip title="Current Price" placement="bottom-start">

                <td className=' cursor-pointer'>
                    <h3 className={`${coin?.price_change_percentage_24h > 0 ? 'text-green' : 'text-red'} text-xl max-md:text-xs text-center`}>${coin?.current_price?.toLocaleString()}</h3>
                </td>
            </Tooltip>

            <Tooltip title="Total Volume" placement="bottom-start">
                <td className=' flex justify-start items-center px-2  '>
                    <p className='text-white text-lg max-md:text-sm text-left max-lg:hidden'> ${coin?.total_volume?.toLocaleString()}</p>
                    <p className='text-white text-lg max-md:text-xs text-left lg:hidden'> ${formatNumber(coin?.total_volume)}</p>
                </td>
            </Tooltip>
            <Tooltip title="Market Cap" placement="bottom-start">
                <td className='flex justify-start items-center px-2 max-lg:hidden'>
                    <p className='text-white text-lg max-md:text-base text-right '> ${coin?.market_cap?.toLocaleString()}</p>
                </td>
            </Tooltip>

        </tr>
        </Link>
    )
}

export default List;