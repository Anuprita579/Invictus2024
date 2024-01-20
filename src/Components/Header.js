import React from 'react'

import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ApiIcon from '@mui/icons-material/Api';

function Header() {
  return (
    <>
        <div className='bg-slate-600 flex justify-between items-center py-3 sticky top-0 z-50 w-full '>
            <div className='text-amber-300 flex'>
                <ApiIcon className='mx-5 mt-2'></ApiIcon>
                <h1 className='text-amber-300 mx-5 text-3xl font-bold max-sm:text-xl'>SkillSpire</h1>
            </div>

            <div className='text-white float-right space-x-4 mr-5' >
                <NotificationsIcon></NotificationsIcon>
                <button>Login</button>
                <button>Register</button>
                <p>Hire Talent</p>
                <PersonIcon></PersonIcon>
            </div>
        </div>
        
    </>
  )
}

export default Header