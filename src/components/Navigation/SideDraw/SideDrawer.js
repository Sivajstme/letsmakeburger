import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';
import Aux from '../../../hoc/Aux';


const sideDrawer = (props) =>{

    let classes = ['SideDrawer','Close'];
    if (props.open) {
        classes = ['SideDrawer','Open'];
    }
    return(
        <Aux>
            <Backdrop show={props.open} Clicked={props.closed}/>
            <div className={classes.join(' ')}>
                <div className='SideLogo'>
                    <Logo />
                </div>
                    <nav>
                        <NavigationItems />
                    </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;