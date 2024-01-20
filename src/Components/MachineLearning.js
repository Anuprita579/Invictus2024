import React from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
const ml = [
    {
        id: "001",
        title: "Data Science Intern",
        company:"Accenture",
        start_date: "Immediately",
        type: "onsite",
        ctc: "Unpaid",
        exp: "3-5",
        post: "2 days ago",
    },
    {
        id: "002",
        title: "Applied ML Intern",
        company:"Adobe",
        start_date: "Immediately",
        type: "onsite",
        ctc: "10000 - 15000",
        exp: "1-5",
        post: "2 weeks ago",
    },
    {
        id: "003",
        title: "Quantitative Analyst (QA) Intern",
        company:"IBM",
        start_date: "Immediately",
        type: "onsite",
        ctc: "3000 - 5000",
        exp: "5-8",
        post: "3 weeks ago",
    },
    {
        id: "004",
        title: "MLOps Intern",
        company:"Cisco",
        start_date: "Immediately",
        type: "hybrid",
        ctc: "Unpaid",
        exp: "2-5",
        post: "3 weeks ago",
    },
    {
        id: "005",
        title: "Natural Language Processing (NLP) Intern",
        company:"Intel",
        start_date: "Immediately",
        type: "onsite",
        ctc: "30000 - 40000",
        exp: "5-10",
        post: "4 weeks ago",
    },
    {
        id: "006",
        title: "Data Science Intern",
        company:"Infosys",
        start_date: "Immediately",
        type: "remote",
        ctc: "26000 - 36000",
        exp: "0-2",
        post: "1 month ago",
    }
]

function MachineLearning() {
  return (
    <>
        <div> 
            <h1>Machine Learning</h1>
            {ml.map((mlitem)=>{
                return(
                    <div key={mlitem.id} className='bg-blue-300 m-2 flex flex-col'>
                        <h1>{mlitem.title}</h1>
                        <h1>{mlitem.company}</h1>
                        <h2>{mlitem.type}</h2>
                        <div className='flex'>
                            <p> <PlayCircleFilledWhiteIcon/> {mlitem.start_date}</p>
                            <p>Stipend: {mlitem.ctc}</p>
                            <p>Experience : {mlitem.exp}</p>
                        </div>
                        <p>{mlitem.post}</p>
                        
                    </div>
                )
            })}
        </div> 
    </>
  )
}

export default MachineLearning
