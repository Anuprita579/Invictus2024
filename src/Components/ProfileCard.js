import React from 'react'
import { Link } from 'react-router-dom'

function ProfileCard({name,Email,linkedin,interest}) {
  return (
    <>
        <div class="profile-card box-shadow">
            <img class="profile-pic" src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg" alt="Profile Picture" />
            <div class="field" >
                <strong>Name:</strong> {name}
            </div>
            <div class="field">
                <strong>Email:</strong> {Email}
            </div>
            <div class="field">
                <strong>LinkedIn Account:</strong>{linkedin}
            </div>
            <div class="field">
                <strong>LinkedIn Experience:</strong> 5 years
            </div>
            <div class="field">
                <strong>Interest:</strong> {interest}
            </div>
            <Link to="/updateprofile"> <button className='bg-blue-400 p-2 rounded-xl text-white'>Update Profile </button></Link>
        </div>
      
    </>
  )
}

export default ProfileCard