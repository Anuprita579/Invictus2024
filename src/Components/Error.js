import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
  return (
    <>
        <div className='h-screen bg-blue-800 flex align-middle justify-center items-center'>
            <div className='bg-blu-800 text-center flex align-middle justify-center items-center'>
                <img src="https://img.freepik.com/free-vector/internship-job-concept_23-2148721817.jpg?w=1380&t=st=1705740961~exp=1705741561~hmac=49bd503d88c5bbc44cb60b24811a06e1a4fe106c7eb2411fcb3e018de1e6a317" alt='errorimg' className='h-60 rounded-full'/>
                <div className='p-3'>
                    <h1 className='text-8xl font-extrabold text-white'>{err.status}</h1>
                    <h1 className='text-xl font-semibold text-slate-300'>Sorry you don't have the magic key </h1> 
                    <h1 className='text-xl font-semibold text-slate-300'> to access this page ;) </h1>   
                    <h2 className='text-md text-slate-300'>{err.statusText}</h2>
                    <Link to="/"><button className='bg-blue-300 text-black p-4'> Back to Home</button></Link>
                </div>
                
            </div> 
        </div>
    </>
  )
}

export default Error