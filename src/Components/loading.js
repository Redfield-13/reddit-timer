import React from 'react'
import Logo from '../images/signsgin.png'
import '../styles/content02.css'

function Loading() {

    return (
        <div className='loader'>
        
            <img className='load' src={Logo} alt=""/>
        </div>
    )
}

export default Loading
