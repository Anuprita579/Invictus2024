import React from 'react';
import { useState } from 'react';
import Headerimg from "../assets/headerimg.jpg"

function UpdateProfile() {
    const [selectedSkills, setSelectedSkills] = useState([]);
    
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
  return (
    <>
        <div className="flex flex-col">
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
            <input type="text" className="user-input" placeholder="Full Name" />
            <input type="text" className="user-input" placeholder="Username" />
            <input type="email" className="user-input" placeholder="Email Address" />
            <input type="tel" className="user-input" placeholder="Phone Number" />
            <textarea className="text-area" placeholder="Biography/About Me"></textarea>
        </div>
        <div className="profile-section">
            <div className="section-title">Contact Information</div>
            <input type="text" className="user-input" placeholder="Address" />
            <input type="text" className="user-input" placeholder="LinkedIn Profile" />
            <input type="text" className="user-input" placeholder="Personal Website" />
        </div>
        <div className="profile-section">
            <div className="section-title">Skills and Interests</div>
            <input type="text" className="user-input" placeholder="Skills" id="userSkills" onclick={toggleSkillsOptions} />
            <div className="selected-skills" id="selectedSkills"></div>
            <textarea className="text-area" placeholder="Interests"></textarea>
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
        <button className="update-btn">Update Profile</button>
    </div>

      
    </>
  )
}

export default UpdateProfile



