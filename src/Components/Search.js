import React from 'react'
import './Search.css'

function Search() {
    return (
        <div className='searchDiv'>
            <div className='searchBar'>
                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png" alt='' />
                <input type='text' value='Search Twitter'/>
            </div>
        </div>
    )
}

export default Search
