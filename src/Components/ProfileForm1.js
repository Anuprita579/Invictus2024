import React from 'react';
import ProfileCard from './ProfileCard';
// import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
// import PaymentsIcon from '@mui/icons-material/Payments';
// import WorkIcon from '@mui/icons-material/Work';


const sv = [
    {
        id: "001",
        title: "Front-end Developer Intern",
        company:"Accenture",
        start_date: "Immediately",
        type: "onsite",
        ctc: "Unpaid",
        exp: "3-5",
        post: "2 days ago",
        img: "https://cdn.theforage.com/vinternships/companyassets/DMrpG9KbbePZxGfSN/gJAzYWCDjzAsPxgYP/Acc_Logo_Black_Purple_RGB.png"
    },
    {
        id: "002",
        title: "WordPress Developer Intern",
        company:"Adobe",
        start_date: "Immediately",
        type: "onsite",
        ctc: "10000 - 15000",
        exp: "1-5",
        post: "2 weeks ago",
        img: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
    },
    {
        id: "003",
        title: "Back-end Developer Intern",
        company:"Intel",
        start_date: "Immediately",
        type: "onsite",
        ctc: "30000 - 40000",
        exp: "5-10",
        post: "4 weeks ago",
        img:"https://www.intel.com/content/dam/logos/intel-header-logo.svg"
    }
]


function ProfileForm1({name,email,linkedin,interest}) {
  return (
    <div className='w-full h-full bg-blue-700'>
        <div className='bg-gradient-to-br from-purple-700 to-blue-700 flex flex-col justify-center align-middle items-center p-6 py-10 w-full'>
            <h1 className='text-5xl font-semibold text-white p-2 max-md:text-3xl'>Welcome Back! </h1>
            <p className='text-yellow-400'>Search for new opportunities and get hired! </p>
        </div> 
        <div className=' flex justify-center'>
            <ProfileCard email={email} name={name} linkedin={linkedin} interest={interest} />
        </div>
        <div>
            <h1 className='text-center text-2xl font-semibold text-white p-4'>Saved Jobs</h1>
            <div className='flex flex-wrap w-full bg-blue-700 h-full justify-center'> 
            {sv.map((mlitem)=>{
                return(
                    <div key={mlitem.id} className='bg-blue-300 m-2 p-3 w-2/5'>
                        <img src={mlitem.img} alt='logo' className='h-5 my-1'/>
                        <h1 className='font-semibold'>{mlitem.title}</h1>
                        <h1 className='text-slate-700'>{mlitem.company}</h1>
                        <h2>{mlitem.type}</h2>
                        <div className='flex'>
                            {/* <p className='m-2'> <PlayCircleFilledWhiteIcon/> {mlitem.start_date}</p>
                            <p className='m-2'> <PaymentsIcon /> {mlitem.ctc}</p>
                            <p className='m-2'> <WorkIcon /> {mlitem.exp}</p> */}
                        </div>
                        <button className='bg-slate-400 text-white p-1'>{mlitem.post}</button>
                        <hr className='m-2'></hr>
                        <button className='bg-indigo-700 text-white p-2 float-right'>Apply</button>
                    </div>
                )
            })}
        </div>  
        </div>
    </div>
  )
}

export default ProfileForm1