import React from 'react'

function ProfileCard() {
  return (
    <>
        <div class="profile-card box-shadow">
            <img class="profile-pic" src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg" alt="Profile Picture" />
            <div class="field" >
                <strong>Name:</strong> John Doe
            </div>
            <div class="field">
                <strong>Email:</strong> john.doe@example.com
            </div>
            <div class="field">
                <strong>LinkedIn Account:</strong> <a class="link" href="#" target="_blank">johndoe</a>
            </div>
            <div class="field">
                <strong>LinkedIn Experience:</strong> 5 years
            </div>
            <div class="field">
                <strong>Interest:</strong> Web Development
            </div>
            <a href="update.html" class="update-profile-btn">Update Profile</a>
        </div>
      
    </>
  )
}

export default ProfileCard
