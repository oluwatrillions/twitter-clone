import React from 'react'
import './Profile.css'
import data  from './data'
import Profile from './Profile'

function User() {
    
    return (
        <div>
            <Profile info={data} />
        </div>
    )
}
export default User
