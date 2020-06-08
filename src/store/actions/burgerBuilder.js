import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const addIngredient = (name) => {
    return {
        ingredientName: name,
        type: actionTypes.ADD_INGREDIENT
    }
};

export const removeIngredient = (name) => {
    return {
        ingredientName: name,
        type: actionTypes.REMOVE_INGREDIENT
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients.data
    }
}

export const initIngridients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed())
            });
    };
};