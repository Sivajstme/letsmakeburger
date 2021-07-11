import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDraw/SideDrawer';




class Layout extends Component{

    state = {
        showSide : true
    }

    sideDrawerClosedHandler= ()=>{
        this.setState({showSide:false});
    }

    render(){
        return(
            <Aux>
                {/* <div>Toolbar, sideDrawer, backdrop</div> */}
                <Toolbar />
                <SideDraw open={this.state.showSide} closed= {this.sideDrawerClosedHandler}/>
                <main className='Content'>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;