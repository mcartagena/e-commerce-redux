import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'


// Reducers for corresponding Actions

const initialState = {
  addedIds: [],
  quantityById: {}
}

const cart = (state = initialState, action) => {
  // write Reducers to handle the actions.
  switch (action.type) {
    case ADD_TO_CART:
      let count = state.quantityById[action.productId] ? state.quantityById[action.productId] : 0;
      if (count===0) {
        ++count;
        return {
          addedIds: [
            ...state.addedIds,
            action.productId
          ],
          quantityById: {
            ...state.quantityById,
            [action.productId]: count
          }
        };
      } else {
        ++count;
        return {
          ...state,
          quantityById: {
            ...state.quantityById,
            [action.productId]: count
          }
        };        
      }
    case CHECKOUT_FAILURE:
      return action.cart;
    case CHECKOUT_REQUEST:
      return initialState;
    default:
      return initialState;
  }

}

export default cart
