import React from "react";
import './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Hamenu from '../../../assets/images/hamenu.png';
const toolbar = (props)=> {

    if (props.show) {
        
    }
    return(
        <header className='Toolbar'>
            <div onClick={props.show} className='hamIcon_outer'>
                <img src={Hamenu} alt='Menu' className='hamIcon' />
            </div>
            <div className='ToolLogo'>
                <Logo />
            </div>
            <nav className='DesktopOnly'>
                <NavigationItems />
            </nav>

        </header>
    )

}

export default toolbar;