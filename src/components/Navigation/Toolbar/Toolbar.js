import React from "react";
import './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const toolbar = ()=> {

    return(
        <header className='Toolbar'>
            <div>MENU</div>
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