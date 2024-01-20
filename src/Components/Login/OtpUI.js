import React, { useEffect, useRef, useState } from 'react';

function OtpUI({length=4, onOtpSubmit=()=>{}}) {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (index, e) => {
        const value = e.target.value;
        if(isNaN(value)){
            return;
        }
        const newOtp = [...otp]
        //allow one input
        newOtp[index] = value.substring(value.length -1);
        setOtp(newOtp);

        //submit trigger
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === length){ 
            onOtpSubmit(combinedOtp);
        }

        //Move to next input once input is filled
        if (value && index < length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus();
        }
    }
    const handleClick = () => {}
    const handleKeyDown = (index,e) => {
        if(e.key === "Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
            inputRefs.current[index-1].focus();
        }
    }
  return (
    <>
        <div>
            {otp.map((value, index)=>{
                return(
                    <input type='text' value={value} key={index} onChange={(e)=>handleChange(index,e)} onClick={()=>handleClick(index)} onKeyDown={(e)=>handleKeyDown(index,e)} ref={(input) => (inputRefs.current[index] = input)} className='m-2 h-10 w-10' />
                );
            })}
        </div>
    </>
  )
}

export default OtpUI