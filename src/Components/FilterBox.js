import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { Slider } from '@mui/material';

const theme = [
    {
        theme_id: "001",
        theme_name: "Beach",
    },
    {
        theme_id: "002",
        theme_name: "Garden",
    },
    {
        theme_id: "003",
        theme_name: "Farmhouse",
    },
    {
        theme_id: "004",
        theme_name: "Rooftop",
    },
    {
        theme_id: "005",
        theme_name: "Vineyard",
    },
    {
        theme_id: "006",
        theme_name: "Mountain",
    },
    {
        theme_id: "007",
        theme_name: "Castle",
    },
    {
        theme_id: "008",
        theme_name: "Banquet halls",
    },
    {
        theme_id: "009",
        theme_name: "Cruise",
    },
];


function FilterBox() {
  return (
    <>
        <div className='bg-purple-50 flex flex-col items-center justify-center m-4 rounded-xl'>
            <h2 className='text-xl font-semibold'>Budget</h2>
            <div className='w-4/5'>
                <Slider valueLabelDisplay="auto" min={50000} max={500000} />
            </div>
            
            
            <h2 className='text-xl font-semibold'>Choose your Wedding day </h2> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker />
            </LocalizationProvider>

            <h2 className='text-xl font-semibold'>Guest Arrangements</h2>
            <p>Guest Count</p>
            <div className='w-4/5'>
                <Slider defaultValue={200} step={50} marks min={50} max={1000} valueLabelDisplay="auto"/>
            </div>
            <div className='flex'>
                <input type='checkbox'/> 
                <p className='pl-2'>Accomodation for guests</p>
            </div>

            <h2 className='text-xl font-semibold'>Theme </h2>
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