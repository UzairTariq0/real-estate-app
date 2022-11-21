import React from 'react'

import House1 from '../../assets/house1.jpg'
import House2 from '../../assets/house2.jpeg'
import House3 from '../../assets/house3.jpg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={House1} alt='1' />
                <img src={House2} alt='2' />
                <img src={House3} alt='3' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best