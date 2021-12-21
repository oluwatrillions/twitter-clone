import React from 'react'
import data from './exploreData'
import ExploreInfo from './ExploreInfo'
import './ExploreHero.css'

function ExploreHero() {
    return (
        <div className='exploreHeroDiv'>
            <ExploreInfo info={ data}/>
        </div>
    )
}

export default ExploreHero
