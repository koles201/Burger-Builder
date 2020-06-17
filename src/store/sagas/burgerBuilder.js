import axios from '../../axios-orders'

import * as actions from '../actions/index'
import { put } from 'redux-saga/effects'

export function* initIngridientsSaga(action) {
    try {
        const response = yield axios.get('/ingredients.json');
        yield put(actions.setIngredients(response));
    } catch (error) {
        yield put(actions.fetchIngredientsFailed());
    }
}