import React from 'react'
import ExploreFollowSuggestion from './ExploreFollowSuggestion'
import data from './WhotoFollowData'
import './ExploreFollow.css'

function ExploreFollow() {
    return (
        <div className='exploreFollowStyle'>
            <ExploreFollowSuggestion data={ data}/>
        </div>
    )
}

export default ExploreFollow
