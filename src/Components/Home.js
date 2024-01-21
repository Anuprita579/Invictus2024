import React from 'react';
import Carousel from './Carousel.js';
import Testimonials from './Testimonials.js';
import MyMap from './Map.js';
import Marquee from './Marquee.js';

function Home() {
  return (
    <div className='bg-blue-800'>

      <Carousel />
      <div className='flex flex-col justify-center align-middle text-center'>
        <h2 className='font-sans font-semibold text-3xl pl-3 text-center text-white mb-4 pt-4'>About Us</h2>
        <p className='pl-3 text-gray-100 mx-40 max-lg:mx-20 max-md:mx-10'>Howdy future interns! Welcome to SkillSpire &mdash; Your Gateway to Opportunities! We're your go-to guide for unlocking exciting internship experiences. Join us in shaping your professional journey effortlessly. Let's turn your internship hunt into a seamless adventure. Cheers to growth and SkillSpire triumphs! 🚀🌐 </p> 
        <br></br> 

        <h2 className='font-sans font-semibold text-3xl pl-3 text-white'>Find out Popular</h2>
        <MyMap />
        <br></br>

        <h2 className='font-sans font-semibold text-3xl pl-3 text-white mb-10'>Testimonials</h2>
        <Testimonials />

        <h2 className='font-sans font-semibold text-3xl pl-3 text-white my-10'>Our Interns Work At</h2>
        <div className='my-10 mb-20'>
            <Marquee/>
        </div>
        

      </div>


    </div>
  )
}

export default Home