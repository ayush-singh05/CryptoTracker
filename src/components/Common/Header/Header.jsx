import React from 'react'
import TemporaryDrawer from './drawer';
import Button from '../../Button/Button'
import { Link, NavLink } from 'react-router-dom';


function
    Header() {
    return (
        <div className='flex justify-between items-center py-2 px-4  bg-black sticky top-0 z-50 md:py-6 max-md:px-5 '>
           <Link to='/'> <h1 className='text-3xl font-bold max-md:text-xl'>CryptoTracker <span className='text-blue'>.</span></h1> </Link>
            <div className='link flex gap-6 text-grey font-semibold text-base max-md:hidden items-center'>
                <NavLink className={({ isActive, isPending }) =>
                    isActive ? "text-white hover:text-white transition ease-in duration-300" : 'hover:text-white transition ease-in duration-300'} to='/'  href=""><p>Home</p></NavLink >
                <NavLink className={({isActive}) => isActive ? 'text-white' : 'hover:text-white transition ease-in duration-300'} to='/compare' href=""> <p>Compare</p></NavLink >
                <NavLink className={({isActive}) => isActive ? 'text-white' : 'hover:text-white transition ease-in duration-300'} to='/watchlist' href=""> <p>Watchlist</p></NavLink >
                <NavLink className={({isActive}) => isActive ? 'text-white' : 'hover:text-white transition ease-in duration-300'} to='/dashboard' href="#"><Button text={"Dashboard"} onClick={() => console.log("clicked")} /></NavLink >
                
            </div>
            <div className='hidden max-md:block'>
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header;
