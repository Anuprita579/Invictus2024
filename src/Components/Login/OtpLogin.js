import React from 'react';
import LoginForm from './LoginForm';

function OtpLogin() {
  return (
    <>
        <div className='h-full w-full flex justify-center align-middle items-center shadow-2xl'>
            <div className='bg-slate-100 flex justify-center align-middle items-center p-10 rounded-2xl'>

                <div >
                    <img src='https://img.freepik.com/premium-vector/unlock-password-correct-success-login-concept-vector-illustration-flat-design_662353-282.jpg' alt='otpsent' className='h-56 m-4 rounded-xl'/>
                </div>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold text-blue-600 mb-5'>Otp Verification</h1>
                    <LoginForm /> 
                </div>

            </div>
            
               
        </div> 
    </>
  )
}

export default OtpLogin