import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {
    let transfrormedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey} />
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (transfrormedIngredients.length === 0) {
        transfrormedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transfrormedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;