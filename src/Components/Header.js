import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='nav-bar'>
                <nav>
                    <img className='logo' src="https://img.icons8.com/color/50/000000/twitter--v1.png" alt=''/>
                </nav>
                <nav className='home'>
                    <img src="https://img.icons8.com/external-those-icons-fill-those-icons/48/000000/external-smart-home-smart-home-those-icons-fill-those-icons-1.png" alt='' />
                    <h2>Home</h2>
                </nav>
                 <nav className='explore'>
                    <img src="https://img.icons8.com/ios/50/000000/hashtag.png" alt='' />
                    <h2>Explore</h2>
                </nav>
                 <nav className='notif'>
                    <img src="https://img.icons8.com/carbon-copy/100/000000/bell--v1.png" alt=''/>
                    <h2>Notifications</h2>
                </nav>
                 <nav className='message'>
                    <img src="https://img.icons8.com/ios/50/000000/filled-message.png" alt=''/>
                    <h2>Messages</h2>
                </nav>
                 <nav className='bookmark'>
                    <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-bookmark-interface-kiranshastry-lineal-kiranshastry.png" alt=''/>
                    <h2>Bookmarks</h2>
                </nav>
                 <nav className='lists'>
                    <img src="https://img.icons8.com/windows/64/000000/clipboard-list.png" alt=''/>
                    <h2>Lists</h2>
                </nav>
                 <nav className='profile'>
                    <img src="https://img.icons8.com/cotton/64/ffffff/gender-neutral-user--v2.png" alt=''/>
                    <h2>Profile</h2>
                </nav>
                 <nav className='more'>
                    <img src="https://img.icons8.com/cotton/64/ffffff/bulleted-list.png" alt=''/>
                    <h2>More</h2>
                </nav>
                <button>Tweet</button>
            </div>
        </div>
    )
}

export default Header
