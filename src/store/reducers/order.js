import * as actionTypes from '../actions/actionTypes'
import { updateState } from '../../shared/utility'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateState(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
    return updateState(state, { loading: true });
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId
    }
    return updateState(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    });
};

const purchaseBurgerFail = (state, action) => {
    return updateState(state, { loading: false });
};

const fetchOrdersSuccess = (state, action) => {
    return updateState(state, {
        orders: action.orders,
        loading: false
    });
};

const fetchOrdersFail = (state, action) => {
    return updateState(state, { loading: false });
};

const fetchOrderStart = (state, action) => {
    return updateState(state, { loading: true });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.PURCHASE_INIT): return purchaseInit(state, action);
        case (actionTypes.PURCHASE_BURGER_START): return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrderStart(state, action);
        default:
            return state;
    }
};

export default reducer;