import React from 'react'
import FollowTeam from './FollowTeam'
import followIdeas from './WhotoFollowData'
import './WhotoFollow.css'

function WhotoFollow() {
    return (
        <div className='follow'>
            <FollowTeam followMe={followIdeas}/>
        </div>
    )
}

export default WhotoFollow
