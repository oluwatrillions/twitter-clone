import React from 'react'
import './Content.css'
import images from './images/pp.jpeg'


function Content() {
    return (
        <div className='content'>
            <div className='sparkles'>
                <h2>Home</h2>
                <img src="https://img.icons8.com/material-outlined/24/000000/sparkling.png" alt='' />
            </div>
            <div className='tweetPage'>
                <div className='tweetImage'>
                    <img src={images} alt='' />
                </div>
                <div className='tweetSection'>
                    <div className='yourTweet'>
                        <textarea name='tweet' cols='50' placeholder='What&apos;s happening?'></textarea>
                        <div className='insideDiv'>
                            <img src="https://img.icons8.com/material-sharp/50/4a90e2/globe.png" alt='' />
                            <h4>Everyone can reply</h4>
                        </div>
                    </div>
                    <div className='tweetPageIcons'>
                        <div className='theIcons'>
                            <img src="https://img.icons8.com/fluency-systems-regular/48/4a90e2/image.png" alt='' />
                            <img src="https://img.icons8.com/windows/32/4a90e2/gif.png" alt='' />
                            <img src="https://img.icons8.com/fluency-systems-regular/48/4a90e2/chart-bar.png" alt=''/>
                            <img src="https://img.icons8.com/ios-glyphs/30/4a90e2/happy--v1.png" alt='' />
                            <img src="https://img.icons8.com/fluency-systems-regular/30/4a90e2/view-shedule.png" alt='' />
                            <img src="https://img.icons8.com/fluency-systems-regular/48/4a90e2/marker.png" alt='' />
                        </div>
                        <button>Tweet</button>
                    </div>
                </div>
            </div>
            <div className='unseenTweets'>Show 74 Tweets</div>
        </div>
    )
}

export default Content
