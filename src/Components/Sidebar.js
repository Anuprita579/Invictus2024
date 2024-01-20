import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='flex flex-col bg-indigo-950 w-1/5 h-full'>
        <Link to="/">
        <div className='flex text-xl  mx-5 my-3 text-white max-sm:justify-center  hover:text-amber-200'>
            <HomeIcon className='mx-4'></HomeIcon>
            <h3 className='max-sm:hidden max-lg:hidden '>Home</h3>
        </div>
        </Link>

        <Link to="/search">
        <div className='flex text-xl mx-5 my-3 text-white max-sm:justify-center  hover:text-amber-200'>
            <SearchIcon className='mx-4'></SearchIcon>
            <h3 className='max-sm:hidden max-lg:hidden'>Search</h3>
        </div>
        </Link>

        <Link to="/contactus"> 
        <div className='flex text-xl  mx-5 my-3 text-white max-sm:justify-center  hover:text-amber-200'>
            <CallIcon className='mx-4'></CallIcon>
            <h3 className='max-sm:hidden max-lg:hidden'>ContactUs</h3>
        </div>
        </Link>

      
    </div>
  )
}

export default Sidebar