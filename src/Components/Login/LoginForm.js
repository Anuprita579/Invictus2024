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

        //API call
        //Show Otp Field
        setShowOtp(true);
    }

    const onOtpSubmit = (otp) => {
        console.log("Login successful", otp);
    }
  return (
    <>
        <div>
            {!showOtp? <form onSubmit={handlePhoneSubmit}>
                <input type="text" value={phoneno} onChange={handlePhoneno} placeholder='Enter Phone Number'/>
                <button>Submit</button>
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