import { produce } from 'immer'
import { Actions } from './actions'

export interface Coffee {
  id: number
  title: string
  priceCoffee: number
  quantityCoffees: number
}

export interface Order {
  id: number
  address: {
    street: string
    number: number
    district: string
    city: string
    complement?: string
    uf: string
  }
  typePayment: 'credit' | 'debit' | 'money'
  coffees: Coffee[]
  totalPrice: number
}

export interface CartState {
  cart: Coffee[]
  totalPriceCoffees: number
  totalCart: number
  orders: Order[]
}

type ActionsType = {
  type: string
  payload: {
    coffee?: Coffee
    cartState?: CartState
    order?: Order
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

          const orders = draft.orders

          draft.totalPriceCoffees = price
          draft.cart.push(action.payload.coffee)
          draft.totalCart = quantityCart

          localStorage.setItem(
            '@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: draft.cart,
              totalPriceCoffees: draft.totalPriceCoffees,
              totalCart: quantityCart,
              orders,
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
          const orders = draft.orders

          localStorage.setItem(
            '@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: draft.cart,
              totalPriceCoffees: draft.totalPriceCoffees,
              totalCart: draft.totalCart,
              orders,
            }),
          )
        }
      })
    case Actions.INCREMENT_COFFEE_ON_CART:
      return produce(state, (draft) => {
        if (action.payload.coffee) {
          const newCoffee = action.payload.coffee!

          const newCart = draft.cart.map((coffee) => {
            if (coffee.id === newCoffee.id) {
              return {
                ...coffee,
                quantityCoffees: action.payload.coffee!.quantityCoffees,
                priceCoffee: action.payload.coffee!.priceCoffee,
              }
            }
            return coffee
          })!

          const orders = draft.orders

          draft.cart = newCart
          draft.totalPriceCoffees += newCoffee.priceCoffee

          localStorage.setItem(
            '@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: draft.cart,
              totalPriceCoffees: draft.totalPriceCoffees,
              totalCart: draft.totalCart,
              orders,
            }),
          )
        }
      })
    case Actions.DECREMENT_COFFEE_ON_CART:
      return produce(state, (draft) => {
        if (action.payload.coffee) {
          const newCoffee = action.payload.coffee!

          const newCart = draft.cart.map((coffee) => {
            if (coffee.id === newCoffee.id) {
              return {
                ...coffee,
                quantityCoffees: action.payload.coffee!.quantityCoffees,
                priceCoffee: action.payload.coffee!.priceCoffee,
              }
            }
            return coffee
          })!

          const orders = draft.orders
          draft.cart = newCart
          draft.totalPriceCoffees -= newCoffee.priceCoffee

          localStorage.setItem(
            '@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: draft.cart,
              totalPriceCoffees: draft.totalPriceCoffees,
              totalCart: draft.totalCart,
              orders,
            }),
          )
        }
      })
    case Actions.INCLUDE_NEW_ORDER:
      return produce(state, (draft) => {
        draft.orders.push(action.payload.order!)
        draft.cart = []
        draft.totalCart = 0
        draft.totalPriceCoffees = 0

        localStorage.setItem(
          '@coffee-delivery:cart-state-1.0.0',
          JSON.stringify({
            cart: [],
            totalPriceCoffees: 0,
            totalCart: 0,
            orders: draft.orders,
          }),
        )
      })
    default:
      return {
        cart: [],
        totalPriceCoffees: 0,
        totalCart: 0,
        orders: [],
      }
  }
}
