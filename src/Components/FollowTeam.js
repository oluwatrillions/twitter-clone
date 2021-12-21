import React from 'react'
import './FollowTeam.css'
import images from './images/picture2.jfif'


function FollowTeam({followMe}) {
    return (
        <div className='followContainer'>
            <h2 className='followLead'>Who to follow</h2>
            {followMe.map((list) => {
                const { id, name, handle } = list
                return <div key={id} className='followStyle'>
                    <div className='generalStyle'>
                        <img src={images} alt='' />
                        <div className='followHandle'>
                            <h3>{name}</h3>
                            <h3 className='handleStyle'>{ handle}</h3>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
            })}
        </div>
    )
}

export default FollowTeam
