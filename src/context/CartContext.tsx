import { ReactNode, createContext, useReducer } from 'react'
import { CartState, Coffee, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeOnCart,
  decrementCoffeeOnCart,
  includeNewOrder,
  incrementCoffeeOnCart,
  updateCartState,
} from '../reducers/cart/actions'

interface CartContextProviderType {
  cart: Coffee[]
  totalPriceCoffees: number
  totalCart: number
  addCoffee: (data: Coffee) => void
  incrementCoffee: (data: Coffee) => void
  decrementCoffee: (data: Coffee) => void
  updateCart: (data: CartState) => void
  includeOrder: (data: Order) => void
  orders: Order[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProviderType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      totalPriceCoffees: 0,
      totalCart: 0,
      orders: [],
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      localStorage.setItem(
        '@coffee-delivery:cart-state-1.0.0',
        JSON.stringify({
          cart: [],
          totalPriceCoffees: 0,
          totalCart: 0,
          orders: [],
        }),
      )
      return initialState
    },
  )

  const { cart, totalPriceCoffees, totalCart, orders } = cartState

  function addCoffee(data: Coffee) {
    dispatch(addCoffeeOnCart(data))
  }

  function updateCart(data: CartState) {
    dispatch(updateCartState(data))
  }

  function incrementCoffee(data: Coffee) {
    dispatch(incrementCoffeeOnCart(data))
  }

  function decrementCoffee(data: Coffee) {
    dispatch(decrementCoffeeOnCart(data))
  }

  function includeOrder(data: Order) {
    dispatch(includeNewOrder(data))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPriceCoffees,
        totalCart,
        addCoffee,
        incrementCoffee,
        decrementCoffee,
        updateCart,
        includeOrder,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
