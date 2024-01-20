import React from 'react'
import { useState, useEffect } from 'react';

const images = [
    {
        id: "img01",
        img_url: "https://plus.unsplash.com/premium_photo-1661517335128-2bcf290d58f6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img_text: "A professional working environment with colleagues collaborating on a project."
    },
    {
        id: "img02",
        img_url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img_text: "A diverse team of interns engaged in a brainstorming session."
    },
    {
        id: "img03",
        img_url: "https://images.unsplash.com/photo-1637073849563-5b0ac780ec34?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img_text: "Interns gaining hands-on experience through mentorship and practical tasks."
    },
    {
        id: "img04",
        img_url: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img_text: "Interns networking and collaborating during a professional event."
    },
];


function Carousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const prevSlide = () =>{
        setCurrentImage((prevImage) => (prevImage-1+ images.length)%images.length);
    }
    const nextSlide = () => {
        setCurrentImage((nextImage) => (nextImage +1)%images.length);
    }
    useEffect(()=>{
        const timer = setInterval(()=>{
            nextSlide();
        }, 5000);
        return ()=>{
            clearInterval(timer);
        }
    }, [currentImage]);
  return (
    <>
    <div className='flex items-center justify-center bg-indigo-800'>
        <button onClick={prevSlide} className='bg-indigo-500 h-80 p-5 max-md:p-1 max-md:h-40 max-lg:p-3'> &lt; </button>
        
        <img src={images[currentImage].img_url} alt="weddingimage" className='w-4/5 m-5 rounded-br-full max-md:w-3/5'></img>
        <button onClick={nextSlide} className='bg-indigo-500 h-80 p-5 max-md:p-1 max-md:h-40 max-lg:p-3'> &gt; </button>
    </div>
    <div className='relative bottom-40 left-40 font-bold font-sans text-3xl w-2/5 p-2 text-white bg-indigo-500 max-md:hidden max-lg:text-sm'>{images[currentImage].img_text}</div>

    </>
  )
}
export default Carousel