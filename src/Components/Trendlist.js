import React from 'react'
import './Trendlist.css'

function Trendlist({trendy}) {
    return (
        <div className='trendsSetup'>
            <div className='trendingList'>
                <h2>Trends for you</h2>
                <img src="https://img.icons8.com/material-outlined/32/000000/settings.png" alt=''/>
            </div>
            {trendy.map((list) => {
                const { id, category, trendSetter, numberofTweets } = list
                return <div key={id} className='trendyList'>
                    <h4>{category}</h4>
                    <h3>{trendSetter}</h3>
                    <h5>{ numberofTweets}K Tweets</h5>
                </div>
            })}
            
        </div>
    )
}

export default Trendlist
