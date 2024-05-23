import {useState} from 'react';

import Drawer from '@mui/material/Drawer';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div >
      <IconButton onClick={() => setOpen(!open)}><MenuRoundedIcon className='text-grey hover:text-white transition ease-in duration-300'/></IconButton>
      <Drawer anchor={'right'} open={open} onClose={() => setOpen(!open)}>
      <div className=' h-full text-grey bg-black  py-2' style={{'width': '40vw'}}>
      <Link to='/' className='hover:text-white transition ease-in duration-300' href=""><p className='py-1 pt-6 px-4'>Home</p></Link>
      <Link to='/compare' className='hover:text-white  transition ease-in duration-300 ' href=""> <p className='py-1 px-4'>Compare</p></Link>
      <Link to='/watchlist' className='hover:text-white transition ease-in duration-300' href=""> <p className='py-1 px-4'>Watchlist</p></Link>
      <Link to='/dashboard' className='hover:text-white transition ease-in duration-300' href=""> <p className='py-1 px-4'>Dashboard</p></Link>
      </div>
      </Drawer>
    </div>
  );
}

