import React, { useState } from 'react';
import ProfileForm1 from './ProfileForm1';
import Headerimg from "../assets/headerimg.jpg";
import { Link } from 'react-router-dom';

function UpdateProfile() {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [name, setName] = useState('John doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [linkedin, setLinkedin] = useState('johndoe');
    const [interest, setInterest] = useState('web-development');
    const [PForm, setPForm] = useState(false);

    function toggleSkillsOptions() {
        // You can implement skills options toggling here if needed
    }

    function selectSkill(skill) {
        const skillsInput = document.getElementById('userSkills');
        skillsInput.value = skill;

        setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }

    function removeSkill(skill) {
        const skillsInput = document.getElementById('userSkills');
        setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
    }

    function handleUpdateProfile() {
        // Get input values
        const updatedName = document.getElementById('name').value;
        const updatedEmail = document.getElementById('Email').value;
        const updatedLinkedin = document.getElementById('Linkedin').value;
        const updatedInterest = document.getElementById('interest').value;

        // Update state variables
        setName(updatedName);
        setEmail(updatedEmail);
        setLinkedin(updatedLinkedin);
        setInterest(updatedInterest);
        setPForm(true)
    }

    return (
        <>
            {!PForm && <div className="flex flex-col">
            <div className="profile-header"> 
                <h1>User Profile</h1>
            </div>
    
            <div className="header-section">
                <img src={Headerimg} alt="Headerimg" className="header-image" />
                <div className="header-content">
            
                </div>
            </div>
            <div className="profile-picture-container">
                <img src="https://images.unsplash.com/profile-1622974424462-24454ec41690image?bg=fff&crop=faces&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Profilepicture" className="profile-picture" />
            </div>
            <div className="profile-section">
                <div className="section-title">User Information</div>
                <input id='name' type="text" className="user-input" placeholder="Full Name" />
                <input type="text" className="user-input" placeholder="Username" />
                <input id='Email' type="email" className="user-input" placeholder="Email Address" />
                <input type="tel" className="user-input" placeholder="Phone Number" />
                <textarea className="text-area" placeholder="Biography/About Me"></textarea>
            </div>
            <div className="profile-section">
                <div className="section-title">Contact Information</div>
                <input type="text" className="user-input" placeholder="Address" />
                <input id='Linkedin' type="text" className="user-input" placeholder="LinkedIn Profile" />
                <input type="text" className="user-input" placeholder="Personal Website" />
            </div>
            <div className="profile-section">
                <div className="section-title">Skills and Interests</div>
                <input type="text" className="user-input" placeholder="Skills" id="userSkills" onclick={toggleSkillsOptions} />
                <div className="selected-skills" id="selectedSkills"></div>
                <textarea id='interest' className="text-area" placeholder="Interests"></textarea>
            </div>
            <div className="profile-section">
                <div className="section-title">Education and Work History</div>
                <textarea className="text-area" placeholder="Education Details"></textarea>
                <textarea className="text-area" placeholder="Work History"></textarea>
            </div>
            <div className="profile-section">
                <div className="section-title">Achievements</div>
                <textarea className="text-area" placeholder="Achievements"></textarea>
            </div>
            <div className="profile-section">
                <div className="section-title">Projects</div>
                <textarea className="text-area" placeholder="Projects"></textarea>
            </div>
            <div className="profile-section">
                <div className="section-title">Uploads and Media</div>
            </div>
                <button className="update-btn" onClick={handleUpdateProfile}  >
                    Update Profile
                </button>
          
        </div>}

        {PForm &&
        <ProfileForm1 email={email} name={name} linkedin={linkedin} interest={interest}/>
        
        } 
    
          
        </>
      )
    }
    
export default UpdateProfile;