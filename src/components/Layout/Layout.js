import React from 'react';
import Aux from '../../hoc/Aux'


const layout = (props) =>{
    
    return(
        <Aux>
        <div>Toolbar, sideDrawer, backdrop</div>
        <main>{props.children}</main>
        </Aux>
    )
}

export default layout;