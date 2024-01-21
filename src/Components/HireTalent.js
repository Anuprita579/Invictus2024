import React from 'react'
import { useState } from 'react';
import Logo from "../assets/logo.jpg"
import MachineLearning from './MachineLearning';

export default function HireTalent() {
    const [ML, setMl] = useState(false)

    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [logoLink, setLogoLink] = useState('');
    const [internshipTitle, setInternshipTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [internshipType, setInternshipType] = useState('');
    const [experienceYears, setExperienceYears] = useState(0);
    const [ctc, setCtc] = useState('');
    const [element,setElement]=useState('')

    function add() {

        const companyName = document.getElementById('companyName').value;
        const companyEmail = document.getElementById('companyEmail').value;
        const logoLink = document.getElementById('logoLink').value;
        const internshipTitle = document.getElementById('internshipTitle').value;
        const startDate = document.getElementById('startDate').value;
        const internshipType = document.getElementById('internshipType').value;
        const experienceYears = document.getElementById('experienceYears').value;
        const ctc = document.getElementById('ctcRangeUpper').value;

        setCompanyName(companyName);
        setCompanyEmail(companyEmail);
        setLogoLink(logoLink);
        setInternshipTitle(internshipTitle);
        setStartDate(startDate);
        setInternshipType(internshipType);
        setExperienceYears(experienceYears);
        setCtc(ctc);

        const Element = {
            id: "0007",
            title: internshipTitle,
            company: companyName,
            start_date: startDate,
            type: internshipType,
            ctc: ctc,
            exp: experienceYears,
            post: 'default',
            img: '#'
        };
        
        setElement(Element);
        console.log(element)



        // let input_heading = document.getElementsByClassName('input-heading')[0].value
        // console.log("INPUT-HEADING: ", input_heading)

        // let input_description = document.getElementsByClassName('input-description')[0].value
        // console.log("INPUT DESCRIPTION: ", input_description)

        // localStorage.setItem(input_heading, input_description)

        // let newTodo = {
        //     heading: input_heading,
        //     description: input_description
        // }

        // localStorage.setItem(input_heading, input_description)

        // displayTodo()
        // console.log("todo added in local storage successfully")

    }






    return (
    


    <>
        {!ML && <div className="container">
            <div className="left-container">
                <img src={Logo} alt="Your Image" />
                <div className="text-boxes">
                    <h5 style={{ marginTop: "0" }}>Navigating Internship Horizons, Right at Your Fingertips</h5>
                </div>
            </div>
            <div className="right-container">
                <h1>Company Login</h1>
                <div className="company-form">
                    <input type="text" className="company-input" id="companyName" placeholder="Company Name" />
                    <input type="email" className="company-input" id="companyEmail" placeholder="Company Email" />
                    <input type="text" className="company-input" id="logoLink" placeholder="Logo Link" />
                    <select className="internship-dropdown" id="internshipTitle">
                        <option value="" disabled selected hidden>Internship Title</option>
                        <option value="ML">ML</option>
                        <option value="AL">AL</option>
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="Database Manager">Database Manager</option>
                    </select>
                    <input type="date" className="company-input" id="startDate" placeholder="Start Date" />
                    <select className="type-dropdown" id="internshipType">
                        <option value="" disabled selected hidden>Type of Internship</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Onsite">Onsite</option>
                    </select>

                    <div className="experience-field">
                        <label className="experience-label">Experience Required</label>
                        <input type="number" className="experience-input" id="experienceYears" placeholder="0" />
                    </div>
                    <input type="text" className="ctc-input" id="ctcRangeLower" placeholder="CTC Range (Lower)" />
                    <input type="text" className="ctc-input" id="ctcRangeUpper" placeholder="CTC Range (Upper)" />
                    <button onClick={() => { setMl(true); add(); }} className="login-btn">
                        Post Internship
                    </button>
                </div>


            </div>
        </div>}

        {ML && <MachineLearning element={element} />}
    </>
    )
}