import React from 'react';
import '../style.css';
import SheetLogo from "../assets/logo.jpg"

function HireTalent() {
    // Press Enter to trigger Post Internship button
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            document.querySelector('.login-btn').click();
        }
    };
    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
  return (
    <> 
        <div className="container">
        <div className="left-container">
            <img src={SheetLogo} alt='logo'/>
            <div className="text-boxes">
                <h5>Navigating Internship Horizons, Right at Your Fingertips</h5>
            </div>
        </div>
        <div className="right-container">
            <h1>Company Login</h1>
            <form className="company-form">
                <input type="text" className="company-input" placeholder="Company Name" />
                <input type="email" className="company-input" placeholder="Company Email" />
                <input type="text" className="company-input" placeholder="Logo Link" />
                <select class="internship-dropdown" id="internshipTitle">
                    <option value="" disabled selected hidden>Internship Title</option>
                    <option value="ML">ML</option>
                    <option value="AL">AL</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Database Manager">Database Manager</option>
                </select>
                <input type="date" class="company-input" placeholder="Start Date" />
                <select className="type-dropdown" id="internshipType">
                    <option value="" disabled selected hidden>Type of Internship</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Onsite">Onsite</option>
                </select>
                <div class="experience-field">
                    <label className="experience-label">Experience Required</label>
                    <input type="number" className="experience-input" placeholder="0" id="experienceYears" />
                </div>
                <input type="text" className="ctc-input" placeholder="CTC Range (Lower)" />
                <input type="text" className="ctc-input" placeholder="CTC Range (Upper)" />
                <button className="login-btn" onClick={(e)=>{e.preventDefault()}}>Post Internship</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default HireTalent