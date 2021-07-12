import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDraw/SideDrawer';




class Layout extends Component{

    state = {
        showSide : false
    }

    sideDrawerClosedHandler= ()=>{
        //console.log('object')
        this.setState({showSide:false});
        
    }

    sideDrawerToggle = ()=>{

        this.setState((state)=>{ return {showSide: !state.showSide}});
    }
    
    render(){
        return(
            <Aux>
                {/* <div>Toolbar, sideDrawer, backdrop</div> */}
                <Toolbar show={this.sideDrawerToggle}/>
                <SideDraw open={this.state.showSide} closed= {this.sideDrawerClosedHandler}/>
                <main className='Content'>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;