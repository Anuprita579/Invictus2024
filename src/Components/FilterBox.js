import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { Slider } from '@mui/material';

const theme = [
    {
        theme_id: "001",
        theme_name: "Frontend Developer",
    },
    {
        theme_id: "002",
        theme_name: "Backend Developer",
    },
    {
        theme_id: "003",
        theme_name: "Full Stack Developer",
    },
    {
        theme_id: "004",
        theme_name: "Data Analyst",
    },
    {
        theme_id: "005",
        theme_name: "QA Engineer",
    },
    {
        theme_id: "006",
        theme_name: "Software Engineer",
    },
    {
        theme_id: "007",
        theme_name: "UI Developer",
    },
];


function FilterBox() {
  return (
    <>
        <div className='bg-blue-200 flex flex-col items-center justify-center m-4 rounded-xl'>
            <h2 className='text-xl font-semibold'>Salary Expectations</h2>
            <div className='w-4/5'>
                <Slider valueLabelDisplay="auto" min={0} max={100000} />
            </div>
            
            
            <h2 className='text-xl font-semibold'>Choose your Internship Period </h2> 
            <div className='flex justify-center items-start align-middle'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                    <p className='mx-3'> &mdash; </p>
                    <DatePicker />
                </LocalizationProvider>
            </div>
            

            <h2 className='text-xl font-semibold'>Experience</h2>
            <div className='w-4/5'>
                <Slider defaultValue={1} step={1} marks min={0} max={20} valueLabelDisplay="auto"/>
            </div>
            <div className='flex'>
                <input type='checkbox'/> 
                <p className='pl-2'>Open for Network</p>
            </div>

            <h2 className='text-xl font-semibold'>Job Roles </h2>
            <div className='grid grid-cols-2 gap-2'>
                {theme.map((themevar)=>{
                    return(
                        <div className='flex' key={themevar.theme_id}>
                            <input type='checkbox'/> 
                            <p className='px-2'>{themevar.theme_name}</p>
                        </div>
                    )
                })}
                
            </div>

        </div> 
    </>
  )
}

export default FilterBox