import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

// Reducers for corresponding Actions

const initialState = {
  byId: {}
}


const products = (state = initialState, action) => {
  // write Reducers to handle the actions.
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      let prds = {};
      action.products.forEach(element => {
        if (element.price) {
          prds = {
            ...prds,
            [element.id]: {
              id: element.id,
              title: element.title,
              price: element.price,
              inventory: element.inventory
            }
          }
        } else {
          prds = {
            ...prds,
            [element.id]: {
              id: element.id,
              title: element.title,
              inventory: element.inventory
            }
          }
        }
      });

      return {
        ...state,
        byId: prds
      };
    case ADD_TO_CART:
      let count = state.byId[action.productId] ? state.byId[action.productId].inventory : 0;
      --count;
      return {
        byId: {
          ...state.byId,
          [action.productId]: Object.assign({}, state.byId[action.productId], {
            inventory: count,
          })
        }
      }
        ;
    default:
      return initialState;
  }

}

export default products

export function getVisibleProducts(products) {
  // write Reducers to handle the actions.
  let prds = [];
  prds = Object.values(products.byId);

  return prds;
}

export function getProduct(state = initialState, id) {
  // write Reducers to handle the actions.
  return state.byId[id];
}
