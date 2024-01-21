import React from 'react'
import { Link } from 'react-router-dom'

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
                <strong>LinkedIn Account:</strong> johndoe
            </div>
            <div class="field">
                <strong>LinkedIn Experience:</strong> 5 years
            </div>
            <div class="field">
                <strong>Interest:</strong> Web Development
            </div>
            <Link to="/updateprofile"> <button className='bg-blue-400 p-2 rounded-xl text-white'>Update Profile </button></Link>
        </div>
      
    </>
  )
}

export default ProfileCard
