import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
  return (
    <>
        <div className='h-screen bg-purple-100 flex align-middle justify-center items-center'>
            <div className='bg-purple-100 text-center flex align-middle justify-center items-center'>
                <img src="https://img.freepik.com/free-vector/bride-groom-getting-married_23-2148408200.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais" alt='errorimg' className='h-60 rounded-full'/>
                <div className='p-3'>
                    <h1 className='text-8xl font-extrabold text-purple-950'>{err.status}</h1>
                    <h1 className='text-xl font-semibold text-purple-950'>Seems like we're in wrong venue </h1> 
                    <h1 className='text-xl font-semibold text-purple-950'> Try another page ;) </h1>   
                    <h2 className='text-md text-purple-950'>{err.statusText}</h2>
                    <Link to="/"><button className='bg-purple-950 text-white p-4'> Back to Home</button></Link>
                </div>
                
            </div> 
        </div>
    </>
  )
}

export default Error