import React from 'react'

function ExploreTrendsPage({data}) {
        return (
        <div className='trendsSetup'>
            <div className='trendingList'>
                <h2>Trends for you</h2>
            </div>
            {data.map((list) => {
                const { id, category, trendSetter, numberofTweets } = list
                return <div key={id} className='trendyList'>
                    <h4>{category}</h4>
                    <h3>{trendSetter}</h3>
                    <h5>{ numberofTweets}K Tweets</h5>
                </div>
            })}
            <h3 className='showMore'>Show more</h3>
        </div>
    )
}

export default ExploreTrendsPage
