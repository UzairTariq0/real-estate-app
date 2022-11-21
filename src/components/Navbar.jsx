import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {BsFillHouseFill} from 'react-icons/bs'
import "./Navbar.css"

const Navbar = () => {
  const [mobile, setMobile] = useState(false)
  const handleClick = ()=> setMobile(!mobile)

  return (
    <div className='navbar'>
        <div className="container">
            <h1><span><BsFillHouseFill/>Real</span>Estate</h1>
            <ul className={mobile ? "nav-menu active" : "nav-menu"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
               {/* <button className='btn'>Sign In</button> */}
            </ul>
            <div className="hamburger" onClick={handleClick}>
              {mobile ? (<AiOutlineClose className='icon'/>) : (<HiMenu className='icon'/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar
