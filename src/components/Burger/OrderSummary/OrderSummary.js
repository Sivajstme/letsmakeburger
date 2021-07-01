import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map((el,i) =>{

        return <li key={el+i}><span style={{textTransform:'capitalize'}}>{el} </span>: {props.ingredients[el]}</li>;
        

    })


    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>

            {ingredientSummary}

            <p><strong>Total Price : {props.price}$ </strong></p>
            <p>Continue to checkout?</p>

            <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>


    )
}

export default orderSummary;