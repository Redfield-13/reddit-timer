import React from 'react'
import Sgin from '../images/signsgin.png'
import '../styles/footer.css'
import {Link} from 'react-router-dom'

function footer() {
    return (
        <div className='footer'>
            <ul className='footy'>
                <li className='left'><a href="">Profy.dev</a></li>
                <Link to='/'><li ><a href=""><img className='face' src={Sgin} alt="Logo"/></a></li></Link>                
                <li className='right'><a href="">Terms & Privacy</a></li>
            </ul>
        </div>
    )
}

export default footer
