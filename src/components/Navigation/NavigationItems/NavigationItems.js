import React from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ()=>{

    return( 
        <ul className='NavigationItems'>
            <NavigationItem 
            link='/' active>Burger Buildern</NavigationItem>
            <NavigationItem 
            link='/'>Checkout</NavigationItem>

            <li></li>
        </ul>
    )

}

export default navigationItems;