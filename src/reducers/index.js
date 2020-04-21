import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

// Reducers for corresponding Actions
export function getCartProducts(state = []) {
  // TO DO return products of the car
  let products = [];

  if (state.cart.addedIds && state.cart.addedIds.length > 0) {
    state.cart.addedIds.map((id, index) => {
      products.push({
        ...state.products.byId[id],
        quantity: state.cart.quantityById[id]
      });
      return products;
    });
  }

  return products;
}

export function getTotal(state = []) {
  // TO DO return the total of product in the cart

  let total = 0;

  if (state.cart.addedIds && state.cart.addedIds.length > 0) {
    state.cart.addedIds.map((id, index) => {
        total = total + state.products.byId[id].price * state.cart.quantityById[id];
      return total;
    });
  }  

  return total.toString();
}