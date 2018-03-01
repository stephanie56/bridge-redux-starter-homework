import {combineReducers} from 'redux';

import {generateProducts, chance} from '../utils/data';
import {ACTION_TYPES} from '../actions';

// you'll notice I set my initial state below on line 13 to equal this object! This is a common pattern
const INITIAL_STATE = {
  productList: generateProducts(10),
  product: {
    id: chance.guid(),
    name: '',
    department: '',
    price: 0,
    stock: 0,
    type: '',
  }
};

export const products = (state = INITIAL_STATE, {type, payload, label, val}) => {
    switch (type) {
        case ACTION_TYPES.addProduct:
            // using object spread, I am saying - I want to return the old state, except change the productList property
            return {...state, productList: state.productList.concat(payload.product)};
        case ACTION_TYPES.removeProduct:
            return {...state, productList: state.productList.filter(prod => prod.id !== payload)};
        case ACTION_TYPES.submitForm:
            return {...state, productList: state.productList.concat(state.product)};
        case ACTION_TYPES.updateProduct:
            return {...state, product: {...state.product, [label]: val}};
    }
    return state;
};


// This is how you can combine many reducers into one large reducer:
// https://redux.js.org/api-reference/combinereducers
export default combineReducers({
    products,
});
