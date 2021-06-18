import React from "react";
import './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const Burger = (props) =>{
    const transformedArr = Object.keys(props.ingredients)
                            .map(e => {return [...Array(props.ingredients[e])]
                            .map((num, i)=>{ return <BurgerIngredient key={e+i} type = {e} />})})
    console.log(transformedArr);

    return(
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {/* <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' /> */}
            {transformedArr}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger;