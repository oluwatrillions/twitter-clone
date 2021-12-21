import React from 'react'
import './Timeline.css'
import picture from './images/picture1.jpg'

function Timeline({tweetData}) {
    return (
        <div className='timeline'>
            {tweetData.map((tweeters) => {
                const { id, displayName, userName, tweet, replies, retweets, likes } = tweeters
                return <div key={ id}className='timelines'>
                            <img className='profileImage' src={picture} alt='' />
                           <div className='tweetContent'>
                                <div className='credentials'>
                                    <div>
                                        <h2 className='displayName'>{displayName}</h2>
                                        <h2 className='username'>{userName}</h2>
                                    </div>
                                    <h6>...</h6>              
                                </div>
                                <h3>{tweet}</h3>
                                <div className='tweetFeedback'>
                                    <div className='tweetMetric'>
                                        <img src="https://img.icons8.com/small/16/000000/twitter-reply.png" alt='' />
                                        <h4>{replies}</h4>
                                    </div>
                                    <div className='tweetMetric'>
                                        <img src="https://img.icons8.com/material-outlined/24/000000/retweet.png" alt='' />
                                        <h4>{retweets}</h4>
                                    </div>
                                    <div className='tweetMetric'>
                                        <img src="https://img.icons8.com/material-outlined/24/000000/like.png" alt='' />
                                        <h4>{likes}</h4>
                                    </div>
                                    <div className='tweetMetric'>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-upload-network-sharing-those-icons-lineal-those-icons.png" alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default Timeline
