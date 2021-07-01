import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png';
import './Logo.css';


const logo =()=>{
    return(
        <div className='Logo'>
            <img src={burgerlogo} alt="My burger"/>
        </div>

    );
}

export default logo;