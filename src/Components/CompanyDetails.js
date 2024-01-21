import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
function CompanyDetails() {
    const { companyname } = useParams();
    console.log('Company ID:', companyname);

    const handleClick = () => {
        alert("Your response has been recorded");
    }

    return (
    <>
        <div className=' h-full w-full flex items-center justify-center'>
            <div className='bg-slate-100 p-4 m-4 w-3/5'>
                <h1>Company Details</h1>
                <h1 className='font-bold text-2xl'> {companyname}</h1>  
                <form className='flex flex-col'>
                    <input type='text' placeholder='Enter Name' />
                    <input type="email" placeholder='Enter Email id'/>
                    <input type='number' placeholder='Enter your mobile Number' />
                    <button type='Submit' onClick={handleClick} className='bg-blue-400 px-4 p-3 rounded-xl w-2/5'>Submit</button>
                </form>

            </div>

            

        </div> 
    </>
  )
}

export default CompanyDetails
