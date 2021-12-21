import React from 'react'
import images from './images/picture2.jfif'
import './ExploreFollowSuggestion.css'

function ExploreFollowSuggestion({data}) {
    return (
        <div className='followContainer'>
            <h2 className='followLead'>Who to follow</h2>
            {data.map((list) => {
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

export default ExploreFollowSuggestion