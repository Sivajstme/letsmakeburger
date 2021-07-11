import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png';
import './Logo.css';


const logo =(props)=>{
    return(
        <div className='Logo' 
        // style={{height: props.height}}
        >
            <img src={burgerlogo} alt="My burger"/>
        </div>

    );
}

export default logo;