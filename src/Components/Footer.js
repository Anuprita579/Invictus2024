import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <>
        <div className='bg-blue-950 text-center w-full text-white pl-48 max-sm:p-0 pt-2'>
            <div className='grid grid-cols-2 gap-2'>
                <ol className='flex justify-center items-center align-middle' >
                    <li className='hover:text-slate-400 mx-2'>About Us</li>
                    <li className='hover:text-slate-400 mx-2'>Blog</li>
                    <li className='hover:text-slate-400 mx-2'>Our Services</li>
                    <li className='hover:text-slate-400 mx-2'>Contact Us</li>
                </ol>
                <div>
                    <p className='text-md font-semibold'>Connect us</p>
                    <ol className='flex justify-center'>
                        <li className='m-2 hover:text-blue-400'> <FacebookIcon /> </li>
                        <li className='m-2 hover:text-pink-400'> <InstagramIcon /> </li>
                        <li className='m-2 hover:text-red-400'> <XIcon /> </li>
                        <li className='m-2 hover:text-blue-400'> <LinkedInIcon /> </li>
                    </ol>
                </div>
            </div>
            <p className='md:text-md sm:text-sm max-sm:text-sm'> &copy; Code Surfers</p>    
        </div>
    </>
  )
}

export default Footer
