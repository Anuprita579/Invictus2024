import React, { useState } from 'react';
import OtpUI from './OtpUI';

function LoginForm() {
    const [phoneno, setPhoneno]= useState("");
    const [showOtp, setShowOtp] = useState(false);

    const handlePhoneno = (e) =>{
        setPhoneno(e.target.value);
    }
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        //Validate Phone
        const regex = /[^0-9]/g;
        if(phoneno.length<10 || regex.test(phoneno)){
            alert("Invalid Phone Number");
            return;
        }
        else{
            alert("OTP has been sent to" + phoneno);
        }

        //API call
        //Show Otp Field
        setShowOtp(true);
    }

    const onOtpSubmit = (otp) => {
        console.log("Login successful", otp);
    }
  return (
    <>
        <div className='bg-slate-100 '>
            {!showOtp? <form onSubmit={handlePhoneSubmit} className='flex flex-col justify-center align-middle items-center'>
                <input type="text" value={phoneno} onChange={handlePhoneno} placeholder='Enter Phone Number' className='p-3 outline-blue-200'/>
                <button className='bg-blue-400 text-white p-2 m-4 rounded-xl px-5'>Submit</button>
            </form> : (
                <div>
                    <p>Otp sent to {phoneno}</p>
                    <OtpUI length={4} onOtpSubmit={onOtpSubmit}/>
                </div>
                )}
        </div>
    </>
  )
}

export default LoginForm