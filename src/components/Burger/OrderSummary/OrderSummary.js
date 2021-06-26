import React from 'react';
import Aux from '../../../hoc/Aux';


const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map((el,i) =>{

        return <li key={el+i}><span style={{textTransform:'capitalize'}}>{el} </span>: {props.ingredients[el]}</li>;
        

    })


    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>

            {ingredientSummary}
            <p>Continue to checkout?</p>
        </Aux>


    )
}

export default orderSummary;