import React from 'react'
import images from './images/pp.jpeg'

function Profile({info}) {
    return (
        <div>
             {info.map((item) => {
                const { id, name, handle } = item;
                return <div key={id} className='profiler'>
                    <img src={images} alt='' />
                    <div className='results'>
                        <h4>{name}</h4>
                        <h4 className='handle'>{handle}</h4>
                        <h1 className='threeDots'>...</h1>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Profile
