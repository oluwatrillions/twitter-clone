import React from 'react'
import images from './images/tiger.jfif'
import './ExploreInfo.css'

function ExploreInfo({info}) {
    return (
        <div className='exploreInfo'>
            {info.map((data) => {
                const { id, category, heading } = data
                return <div className='exploreInfoImg' key={id}>
                    <img src={images} alt='' />
                    <div>
                        <div className='h4s'>
                            <h4>{category}</h4>
                            <h4>LIVE</h4>
                        </div>
                        <h1 className='headingCaption'>{heading}</h1>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ExploreInfo
