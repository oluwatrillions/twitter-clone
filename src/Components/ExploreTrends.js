import React from 'react'
import data from './TrendsData'
import './ExploreTrends.css'
import ExploreTrendsPage from './ExploreTrendsPage'

function ExploreTrends() {
    return (
        <div className='exploreTrends'>
            <ExploreTrendsPage data={ data}/>
        </div>
    )
}

export default ExploreTrends
