import React from 'react'
import Carousel from './Carousel';
import Testimonials from './Testimonials.js';
import MyMap from './Map.js';
import OtpLogin from './Login/OtpLogin.js';

function Home() {
  return (
    <div className='bg-indigo-200'>

      Home 
      
      <div className='flex flex-col justify-center align-middle text-center'>
        <h2 className='font-sans font-semibold text-3xl pl-3 text-center text-purple-950 mb-4 pt-4'>About Us</h2>
        <p className='pl-3 mx-40 max-lg:mx-20 max-md:mx-10'> Hey party planners and lovebirds! Welcome to Wedsy.com - Where Weddings Simplify! We're the easygoing pals of wedding planning, ready to add a dash of fun to your special day. Come along for a stress-free journey. Let's make your wedding a breeze and a blast! Cheers to love and Wedsy wonders! 🎉💍 </p> 
        <br></br> 

        <h2 className='font-sans font-semibold text-3xl pl-3 text-purple-950'>Find out Popular</h2>
        <MyMap />
        <br></br>

        <h2 className='font-sans font-semibold text-3xl pl-3 text-purple-950 mb-10'>Testimonials</h2>
        <Testimonials />

      </div>

      <OtpLogin />


    </div>
  )
}

export default Home