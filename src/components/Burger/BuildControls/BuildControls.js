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
            <p> Current Price:<strong> {props.price.toFixed(2)}</strong> $</p>

            {
                controls.map((el,ind)=> {
                    return <BuildControl 
                            key={el.label} 
                            label={el.label} 
                            added = {() => props.ingredientAdded(el.type)}
                            remove = {() => props.ingredientRemove(el.type)}
                            isDisable = {props.disable[el.type]}
                            />}
                
                )
            }

        </div>
    )
}


export default buildControls;