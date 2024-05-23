import React from 'react'
import TemporaryDrawer from './drawer';
import Button from '../../Button/Button'
import { Link } from 'react-router-dom';


function
    Header() {
    return (
        <div className='flex justify-between items-center py-2 px-4  bg-black sticky top-0 z-50 md:py-6 max-md:px-5 '>
            <h1 className='text-3xl font-bold max-md:text-xl'>CryptoTracker <span className='text-blue'>.</span></h1>
            <div className='link flex gap-6 text-grey font-semibold text-base max-md:hidden items-center'>
                <Link to='/' className='hover:text-white transition ease-in duration-300' href=""><p>Home</p></Link >
                <Link to='/compare' className='hover:text-white transition ease-in duration-300' href=""> <p>Compare</p></Link >
                <Link to='/watchlist' className='hover:text-white transition ease-in duration-300' href=""> <p>Watchlist</p></Link >
                <Link to='/dashboard' className='hover:text-white transition ease-in duration-300' href="#"><Button text={"Dashboard"} onClick={() => console.log("clicked")} /></Link >
                
            </div>
            <div className='hidden max-md:block'>
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header;
