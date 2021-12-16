import React from 'react'
import Search from './Search'
import './Trending.css'
import Trends from './Trends'
import WhotoFollow from './WhotoFollow'

function Trending() {
    return (
        <div className='trending'>
            <div className='trends'>
                <Search />
                <Trends />
                <WhotoFollow/>
            </div>    
        </div>
    )
}

export default Trending
