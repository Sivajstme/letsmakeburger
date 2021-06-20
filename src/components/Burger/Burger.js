import React from "react";
import './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const Burger = (props) =>{
    // const transformedArr = Object.keys(props.ingredients)
    //                         .map(e => {return [...Array(props.ingredients[e])]
    //                         .map((num, i)=>{ return <BurgerIngredient key={e+i} type = {e} />})})

    /*      Key     value
            salad : 1,
            bacon : 1,
            cheese : 2,
            meat : 1 
            [salad, bacon, cheese,cheese, meat];

    */
    let transformedArr = Object.keys(props.ingredients) //['salad', 'meat','bacon']
                                .map((e,i)  => {return [...Array(props.ingredients[e])] //[array[1],Array[1],Array[2]]
                                .map((empOne, empIndx) => {
                                        return <BurgerIngredient key={e+empIndx} type={e} />
                                    
                                    })
                                }).reduce((prevValue, currentValue) => {

                                    return prevValue.concat(currentValue)
                                },[]);

    console.log(transformedArr);
    if (transformedArr.length === 0) {
        transformedArr = <p>Please Start adding ingredients!!!</p>
    }

    return(
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {transformedArr}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger;