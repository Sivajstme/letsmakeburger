import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {label : 'Salad' , type : 'salad'},
    {label : 'Meat' , type : 'meat'},
    {label : 'Cheese' , type : 'cheese'},
    {label : 'Bacon' , type : 'bacon'}    
]


const buildControls = (props) =>{

    return(
        <div className='BuildControls'>
            {
                controls.map((el,ind)=> {
                    return <BuildControl 
                            key={el.label} 
                            label={el.label} 
                            added = {() => props.ingredientAdded(el.type)}
                            remove = {() => props.ingredientRemove(el.type)}
                            />}
                
                )
            }

        </div>
    )
}


export default buildControls;