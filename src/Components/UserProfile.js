import React from 'react'
import Timeline from './Timeline'
import Tweets from './Tweets'

function UserProfile() {
    return (
        <div>
            <Timeline tweetData ={Tweets} />
        </div>
    )
}

export default UserProfile
