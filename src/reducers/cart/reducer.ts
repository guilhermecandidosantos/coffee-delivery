import { produce } from 'immer'
import { Actions } from './actions'

export interface Coffee {
  id: number
  title: string
  priceCoffee: number
  quantityCoffees: number
}

export interface CartState {
  cart: Coffee[]
  totalPriceCoffees: number
  totalCart: number
}

type ActionsType = {
  type: string
  payload: {
    coffee?: Coffee
    cartState?: CartState
  }
}
export function cartReducer(state: CartState, action: ActionsType) {
  switch (action.type) {
    case Actions.ADD_COFFEE_ON_CART:
      return produce(state, (draft) => {
        if (action.payload.coffee) {
          let price = draft.totalPriceCoffees
          let quantityCart = draft.totalCart
          const totalPrice = (
            action.payload.coffee.priceCoffee *
            action.payload.coffee.quantityCoffees
          ).toFixed(2)

          price += Number(totalPrice)
          quantityCart += 1

          draft.totalPriceCoffees = price
          draft.cart.push(action.payload.coffee)
          draft.totalCart = quantityCart

          localStorage.setItem(
            '@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: draft.cart,
              totalPriceCoffees: draft.totalPriceCoffees,
              totalCart: quantityCart,
            }),
          )
        }
      })
    case Actions.UPDATE_CART_STATE:
      return produce(state, (draft) => {
        if (action.payload.cartState) {
          draft.cart = action.payload.cartState.cart
          draft.totalPriceCoffees = action.payload.cartState.totalPriceCoffees
          draft.totalCart = action.payload.cartState.totalCart

          localStorage.setItem(
            '@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: draft.cart,
              totalPriceCoffees: draft.totalPriceCoffees,
              totalCart: draft.totalCart,
            }),
          )
        }
      })
    default:
      return {
        cart: [],
        totalPriceCoffees: 0,
        totalCart: 0,
      }
  }
}
