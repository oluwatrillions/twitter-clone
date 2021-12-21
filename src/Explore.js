import React from 'react'
import ExploreHero from './Components/ExploreHero'
import ExploreTrends from './Components/ExploreTrends'
import Header from './Components/Header'
import './Explore.css'
import ExploreFollow from './Components/ExploreFollow'

function Explore() {
    return (
        <div className='exploreContainer'>
            <Header />
            <div className='exploreStyles'>
                <div className='exploreSearch'>
                    <div className='searchTab'>
                    <img src="https://img.icons8.com/fluency-systems-regular/48/000000/search--v1.png" alt=''/>
                        <h4>Search Twitter</h4>
                    </div>
                    <img className='settingsImg' src="https://img.icons8.com/material-outlined/48/000000/settings.png" alt=''/>
                </div>
                <ExploreHero />
                <ExploreTrends/>
            </div>
            <ExploreFollow/>
        </div>
    )
}

export default Explore
