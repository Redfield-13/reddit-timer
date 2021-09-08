import React from 'react'
import '../styles/header.css'
import Logo from '../images/logo.png'

function Header() {
    return (
        <div className='header'>
            <div className="logo">
            <a href=""><img src={Logo} alt="Logo"/></a>
            
            </div>
            <div className="nav">
                    <ul>
                        <li className='searchli'><a href="">Search</a></li>
                        <li><a href="">How it works</a></li>
                        <li><a href="">About</a></li>
                    </ul>
            </div>
        </div>
    )
}

export default Header
