import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class orderSummary extends Component{

    // componentDidUpdate(){
    //     console.log('Order Summary Will Update');
    // }



    render(){
        //console.log('object')
    const ingredientSummary = Object.keys(this.props.ingredients).map((el,i) =>{

        return <li key={el+i}><span style={{textTransform:'capitalize'}}>{el} </span>: {this.props.ingredients[el]}</li>;
    })


        return(
            
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>

                {ingredientSummary}

                <p><strong>Total Price : {this.props.price}$ </strong></p>
                <p>Continue to checkout?</p>

                <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>


        )
    }
}

export default orderSummary;