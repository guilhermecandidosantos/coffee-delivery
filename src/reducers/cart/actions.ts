import { CartState, Coffee } from './reducer'

export enum Actions {
  ADD_COFFEE_ON_CART = 'ADD_COFFEE_ON_CART',
  UPDATE_CART_STATE = 'UPDATE_CART_STATE',
}

export function addCoffeeOnCart(coffee: Coffee) {
  return {
    type: Actions.ADD_COFFEE_ON_CART,
    payload: {
      coffee,
    },
  }
}

export function updateCartState(cartState: CartState) {
  return {
    type: Actions.UPDATE_CART_STATE,
    payload: {
      cartState,
    },
  }
}
