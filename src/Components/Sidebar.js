import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='flex flex-col bg-indigo-950 w-1/5 h-full'>
        <Link to="/">
        <div className='flex text-2xl  mx-5 my-3 text-white max-sm:justify-center  hover:text-amber-200'>
            <HomeIcon className='mx-4'></HomeIcon>
            <h3 className='max-sm:hidden max-lg:hidden '>Home</h3>
        </div>
        </Link>

        <Link to="/search">
        <div className='flex text-2xl mx-5 my-3 text-white max-sm:justify-center  hover:text-amber-200'>
            <SearchIcon className='mx-4'></SearchIcon>
            <h3 className='max-sm:hidden max-lg:hidden'>Search</h3>
        </div>
        </Link>

        <Link to="/card"> 
        <div className='flex text-2xl  mx-5 my-3 text-white max-sm:justify-center  hover:text-amber-200'>
            <CardGiftcardIcon className='mx-4'></CardGiftcardIcon>
            <h3 className='max-sm:hidden max-lg:hidden'>Card</h3>
        </div>
        </Link>

        <Link to="/community">
        <div className='flex text-2xl mx-5 my-3 text-white max-sm:justify-center  hover:text-amber-200'>
            <ForumIcon className='mx-4'></ForumIcon>
            <h3 className='max-sm:hidden max-lg:hidden'>Community</h3>
        </div>
        </Link>
      
    </div>
  )
}

export default Sidebar