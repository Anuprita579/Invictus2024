import { ImportExportRounded } from '@mui/icons-material';
import React from 'react';
import { useState, useEffect } from 'react';
import HireTalent from './HireTalent'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PaymentsIcon from '@mui/icons-material/Payments';
import WorkIcon from '@mui/icons-material/Work';



function MachineLearning({ element }) {


    const [ml, setml] = useState([{
        id: "001",
        title: "Data Science Intern",
        company: "Accenture",
        start_date: "Immediately",
        type: "onsite",
        ctc: "Unpaid",
        exp: "3-5",
        post: "2 days ago",
        img: "https://cdn.theforage.com/vinternships/companyassets/DMrpG9KbbePZxGfSN/gJAzYWCDjzAsPxgYP/Acc_Logo_Black_Purple_RGB.png"
    },
    {
        id: "002",
        title: "Applied ML Intern",
        company: "Adobe",
        start_date: "Immediately",
        type: "onsite",
        ctc: "10000 - 15000",
        exp: "1-5",
        post: "2 weeks ago",
        img: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
    },
    {
        id: "003",
        title: "Quantitative Analyst (QA) Intern",
        company: "IBM",
        start_date: "Immediately",
        type: "onsite",
        ctc: "3000 - 5000",
        exp: "5-8",
        post: "3 weeks ago",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAUVBMVEX///97e3ve3t6UlJTOzs7V1dWNjY2Dg4Pr6+s9PT3w8PB2dnbKysrh4eHHx8eXl5e8vLxpaWlCQkL39/ezs7Otra1XV1empqaenp44ODhLS0sXijQ6AAAA3UlEQVRIie2S3Q7CIAyFO2CUn8HYppv6/g9qO/TChLF4pwkfCadAGko5AI1Go/FvGMG4LMIBLKyGTtw7KJN813V+uLAQEQJH+nXi02Fi1FJKrRILR1ezbwhYdo2HiSEqpaIRLMOgVL9wpAwsLDFUXjlZz7Jaqm+dZ4DNziRI81Rtj+gFS5+hbphdeRLVxBFvLBp3qK8JUdLAG45fJ4YOMW4niaVSeeXCSamF5txB2wd4W2tO+TsABgN99TuKBqC7McCmawb4tJzPlqPa6dKxarmyyfMrqiZvNBqNX+UJ2fMKjrSwzHkAAAAASUVORK5CYII="
    },
    {
        id: "004",
        title: "MLOps Intern",
        company: "Cisco",
        start_date: "Immediately",
        type: "hybrid",
        ctc: "Unpaid",
        exp: "2-5",
        post: "3 weeks ago",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAWlBMVEX///8AldXm8vkAmNa23PCu2e/z+v0AjtJMsd8AktMAkNMAnNcAmtbh8fml1u7r9/wsqdw9rt6Axeea0ewAodmQzeq+4PLY7fdMteHR6vZYt+F3wuZoveSGyeiYOHGmAAABIklEQVQ4je3SzZKDIAwAYBCMf4ACRdxuef/X3CigVjzu7F6aQzMTvjokgZBP/FeE8VoZ3Z2rOn4t1V11B2kBOb3CETKUuSQzhPONpjZB1UCsQKMSbKcT1Duk6f8jtRc46wIaU0A9E0cLqHUBO0dct95RZ9hl2GWoE/QBs+IJSrOOr8YfIxPk2BUJ/jTHvhx4fzdwMhcVKEu/HmADPhRvcS0+GL5XMBl7cuPAaA/bY/F0mBbsXjDabAeMPWCHi7CA/dc4DcW2Biah4AtnKGqw4rlDGte5QklZ6wnQNh6sRrMdsgMS+T0IhDrC5R0+hanmCPE+L0xauLXSCieDeB1NPxjDh6hwEaqnTMcumnhwbgY/5nCjkgOR1vGjsqZisZ/4k/gB9Q8NI3lYV4wAAAAASUVORK5CYII="
    },
    {
        id: "005",
        title: "Natural Language Processing (NLP) Intern",
        company: "Intel",
        start_date: "Immediately",
        type: "onsite",
        ctc: "30000 - 40000",
        exp: "5-10",
        post: "4 weeks ago",
        img: "https://www.intel.com/content/dam/logos/intel-header-logo.svg"
    },
    {
        id: "006",
        title: 'UI-UX',
        company: "Infosys",
        start_date: "Immediately",
        type: "remote",
        ctc: "26000 - 36000",
        exp: "0-2",
        post: "1 month ago",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAWCAMAAACi/q9qAAAAWlBMVEX///8QdL2VttqwyOIbdr7T4O/F1uqlwd+/0uitxuIAcLsAbbra5fFyoNDy9vpJisacutx/qNMrfMA7g8Pl7fW4zeVmmc1SjsgAabmMsNcAZLfN2+xaksp4pNFqVL/NAAABlUlEQVQ4jZWT25KDIAyGA0apnA2IdVve/zUXRHa2M3Y7mxsg5svhR0CLB7yaHbxY4aPNcn91aJn29KU/ggPyV8dxjvHf4EN+LvYDxlmD9ruPYPdEmVfzfPEthV09n8cfwK5CrLGBo/JZJifZYPOT0rIsieRmSKUSyO/G78S6EuXIjQwnSFj9mliEmRWVLYVaTbAAg6qqW8LGrap+sPsJYjq8AucSPAE4bOJ4XAydu3ZDzv2ecWRNoBtr4MS6YIFCAy3b6qIx/AVm1m/DE5E7hDGs9pgDpfgedNjTTmieiM8y5siWUlfZgJjjO5Cog3X6ocS6WLJZEEttApmx1+D2q2IJhceGaFcmAI+bLZnCNbizft8eh3PdAcPYJTVF4ytQy9xVZeeGDOzkbr0TKS5ByLKV9EyctdFDRALd3qBV0zUIm6zJucqwmaKhzUWZCus7Lxv7LDOuTsAYfJMirDCHIylX6GT5kYBLxfCeSvhNWbCbVET3PsmljbezS/1orySYo8vHNL5lLm1S/wS6Bfc55soify34DePzFSrPRrf7AAAAAElFTkSuQmCC"
    }]);

    // const removeCompany = (companyToRemove) => {
    //     // Remove elements where the company is equal to companyToRemove
    //     const updatedml = ml.filter(item => item.company !== companyToRemove);

    //     // Update state with the new array
    //     setml(updatedml);
    //   };




    const [newElement, setNewElement] = useState('');

    useEffect(() => {
        // Retrieve data from local storage on component mount
        const storedMl = JSON.parse(localStorage.getItem('ml')) || {};

        // Check if newElement has a value before pushing
        if (element) {
            const updatedMl = [...ml, element];

            // Store each element separately with its company name as the key
            updatedMl.forEach((item) => {
                const companyKey = item.company.replace(/\s+/g, ''); // Remove spaces from company name for key
                storedMl[companyKey] = item;
            });

            // Store the updated data in local storage
            localStorage.setItem('ml', JSON.stringify(storedMl));

            // Update state with the new element
            setml(updatedMl);
        }
    }, [element]);


    const removeCompany = (companyToRemove) => {
    
        const storedMl = JSON.parse(localStorage.getItem('ml')) || {};

   
        delete storedMl[companyToRemove];


        localStorage.setItem('ml', JSON.stringify(storedMl));

        setml(Object.values(storedMl));
    };


    useEffect(() => {
        removeCompany('ygsygf');
    }, []);




    return (
        <>
            <div className='flex flex-wrap w-full bg-blue-700 h-full justify-center'>
                {ml.map((mlitem) => {
                    return (
                        <div key={mlitem.id} className='bg-blue-300 m-2 p-3 w-2/5'>
                            {/* <img src={mlitem.img} alt='logo' className='h-5 my-1'/> */}
                            <h1 className='font-semibold'>{mlitem.title}</h1>
                            <h1 className='text-slate-700'>{mlitem.company}</h1>
                            <h2>{mlitem.type}</h2>
                            <div className='flex'>
                            <p className='m-2'> <PlayCircleFilledWhiteIcon/> {mlitem.start_date}</p>
                            <p className='m-2'> <PaymentsIcon /> {mlitem.ctc}</p>
                            <p className='m-2'> <WorkIcon /> {mlitem.exp}</p> 
                            </div>
                            <button className='bg-slate-400 text-white p-1'>{mlitem.post}</button>
                            <hr className='m-2'></hr>
                            <button className='bg-indigo-700 text-white p-2 float-right'>Apply</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MachineLearning