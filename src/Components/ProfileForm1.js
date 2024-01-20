import React from 'react'

function ProfileForm1() {
    // Press Enter to trigger Submit Details button
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            document.querySelector('.login-btn').click();
        }
    });

    function toggleInterestsOptions() {
        const interestsOptions = document.getElementById('interestsOptions');
        interestsOptions.style.display = (interestsOptions.style.display === 'block') ? 'none' : 'block';
    }

    function selectInterest(interest) {
        const interestsDropdown = document.getElementById('userInterests');
        interestsDropdown.value = interest;

        const selectedInterestsContainer = document.getElementById('selectedInterests');
        const interestTag = document.createElement('div');
        interestTag.classList.add('selected-interest');
        interestTag.innerHTML = `
            <span>${interest}</span>
            <span class="remove-interest" onclick="removeInterest('${interest}')">&#10006;</span>
        `;
        selectedInterestsContainer.appendChild(interestTag);

        // Close the interests options
        toggleInterestsOptions();
    }

    function removeInterest(interest) {
        const interestsDropdown = document.getElementById('userInterests');
        const optionToRemove = Array.from(interestsDropdown.options).find(option => option.value === interest);
        optionToRemove.selected = false;

        const selectedInterestsContainer = document.getElementById('selectedInterests');
        const interestTagToRemove = Array.from(selectedInterestsContainer.children).find(tag => tag.firstChild.textContent === interest);
        selectedInterestsContainer.removeChild(interestTagToRemove);

        // Trigger change event to update selected interests
        const event = new Event('change');
        interestsDropdown.dispatchEvent(event);
    }

    // Function to simulate file upload
    function uploadCV() {
        const cvInput = document.getElementById('cvInput');
        cvInput.click();
    }
  return (
    <>
        <div class="container">
        <div class="left-container">
            <img src="logo.png" alt="Your Image">
            <div class="text-boxes">
                <h5 style="margin-top: 0;">Navigating Internship Horizons, Right at Your Fingertips</h5>
            </div>
        </div>
        <div class="right-container">
            <h1>User Details</h1>
            <form class="user-form">
                <input type="text" class="user-input" placeholder="Full Name" />
                <input type="email" class="user-input" placeholder="Email" />
                <input type="tel" class="phone-input" pattern="[0-9]{10}" placeholder="Phone Number (10 digits)" />
                <input type="text" class="location-input" placeholder="Location" />
                <div class="dropdown-container" >
                    <input
                        type="text"
                        class="interests-dropdown"
                        id="userInterests"
                        placeholder="Select Interested Fields"
                        style="align-items: center;"
                        onclick="toggleInterestsOptions()"
                    />
                    <div class="interests-options" id="interestsOptions">
                        <div class="interests-option" onclick="selectInterest('ML')">ML</div>
                        <div class="interests-option" onclick="selectInterest('AL')">AL</div>
                        <div class="interests-option" onclick="selectInterest('Web Development')">Web Development</div>
                        <div class="interests-option" onclick="selectInterest('UI/UX')">UI/UX</div>
                        <div class="interests-option" onclick="selectInterest('Database Manager')">Database Manager</div>
                    </div>
                </div>
                <div class="selected-interests" id="selectedInterests"></div>
                <div class="experience-field">
                    <label class="experience-label"style="color:grey;">Experience</label>
                    <input type="number" class="experience-input" placeholder="0" id="experienceYears" style="color:grey;"/>
                </div>
                <div class="file-input-container" style="justify-content: center;">
                    <label for="cvInput" class="cv-input" onclick="uploadCV()">Choose File</label>
                    <input type="file" id="cvInput" class="cv-input" />
                    <button type="button" class="cv-upload-btn" onclick="uploadCV()">Upload CV</button>
                </div>
                <button class="login-btn">Submit Details</button>
            </form>
        </div>
    </div>
      
    </>
  )
}

export default ProfileForm1




