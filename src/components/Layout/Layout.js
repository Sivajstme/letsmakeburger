import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';

const layout = (props) =>{
    
    return(
        <Aux>
            <div>Toolbar, sideDrawer, backdrop</div>
            <main className='Content'>{props.children}</main>
        </Aux>
    )
}

export default layout;