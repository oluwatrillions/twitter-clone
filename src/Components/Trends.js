import React from 'react'
import Trendlist from './Trendlist'
import './Trends.css'
import TrendsData from './TrendsData'

function Trends() {
    return (
        <div className='theTrendy'>
            <Trendlist trendy={ TrendsData}/>
        </div>
    )
}

export default Trends
