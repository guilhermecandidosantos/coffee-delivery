import { CartState, Coffee, Order } from './reducer'

export enum Actions {
  ADD_COFFEE_ON_CART = 'ADD_COFFEE_ON_CART',
  UPDATE_CART_STATE = 'UPDATE_CART_STATE',
  INCREMENT_COFFEE_ON_CART = 'INCREMENT_COFFEE_ON_CART',
  DECREMENT_COFFEE_ON_CART = 'DECREMENT_COFFEE_ON_CART',
  INCLUDE_NEW_ORDER = 'INCLUDE_NEW_ORDER',
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

export function incrementCoffeeOnCart(coffee: Coffee) {
  return {
    type: Actions.INCREMENT_COFFEE_ON_CART,
    payload: {
      coffee,
    },
  }
}

export function decrementCoffeeOnCart(coffee: Coffee) {
  return {
    type: Actions.DECREMENT_COFFEE_ON_CART,
    payload: {
      coffee,
    },
  }
}

export function includeNewOrder(order: Order) {
  return {
    type: Actions.INCLUDE_NEW_ORDER,
    payload: {
      order,
    },
  }
}
