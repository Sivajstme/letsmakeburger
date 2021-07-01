import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) =>{
    
    return(
        <Aux>
            {/* <div>Toolbar, sideDrawer, backdrop</div> */}
            <Toolbar />
            <main className='Content'>{props.children}</main>
        </Aux>
    )
}

export default layout;