import React from 'react';
import Logo from "../assets/company_logo.jpg";
import { Link } from 'react-router-dom';

import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <>
        <div className='bg-indigo-900 flex justify-between sticky top-0 z-50 w-full '>
            <div className='text-amber-300 flex'>
                <img src={Logo} alt='logo' className='h-16' />
            </div>

            <div className='text-white space-x-4 mr-5 flex align-middle items-center' >
                <NotificationsIcon></NotificationsIcon>
                <Link to="/login"> <button>Login</button> </Link>
                <p>Hire Talent</p>
            </div>
        </div>
        
    </>
  )
}

export default Header