import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.8,
    meat : 1.8,
    bacon : 1.5
}


class BurgerBuilder extends Component{
    
    // constructor(props){
    //     super(props); Old way
    //     this.state ={
    //     }
    // }

    state = { 
        ingredients:{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 5,
        purchasable : false
    }
    updatePurchase = ()=> {

        const ingredient= {...this.state.ingredients}  //['salad','bacon','cheese','meat']
        //const isPurchasable = this.state.purchasable;
        const totalPrice = Object.keys(ingredient)
                            .map((e,i)=> {return ingredient[e]})
                            .reduce((sum,currentValue)=>{return sum += currentValue},0);
        
        this.setState({purchasable : totalPrice > 0});


    }
    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice : newPrice, ingredients : updatedIngredients})

    }
    
    removeIngredientHandler = (type) =>{
        const presentCount = this.state.ingredients[type];
        if (presentCount <= 0) {
            return;
        }
        const updatedCount = presentCount - 1;
        const presentIngState = {...this.state.ingredients};
        presentIngState[type] = updatedCount;
        const presentPrice = this.state.totalPrice;
        const updatedPrice = presentPrice - INGREDIENT_PRICES[type];

        if (updatedPrice === 0) {
            this.setState({ingredients : presentIngState, totalPrice : presentPrice});
        }else{
            this.setState({ingredients : presentIngState, totalPrice : updatedPrice});
        }
        
    }
    render(){
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            
            disabledInfo[key] = disabledInfo[key] <= 0;
            
        }
        // console.log(disabledInfo);
        return(

            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                    <BuildControls 
                    price = {this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemove = {this.removeIngredientHandler}
                    disable = {disabledInfo}
                    isPurchasable = {this.state.purchasable}
                    />
            </Aux>

        )
    }
}

export default BurgerBuilder;