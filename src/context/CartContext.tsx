import { ReactNode, createContext, useReducer } from 'react'
import { CartState, Coffee, cartReducer } from '../reducers/cart/reducer'
import { addCoffeeOnCart, updateCartState } from '../reducers/cart/actions'

interface CartContextProviderType {
  cart: Coffee[]
  totalPriceCoffees: number
  totalCart: number
  addCoffee: (data: Coffee) => void
  updateCart: (data: CartState) => void
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
        JSON.stringify({ cart: [], totalPriceCoffees: 0, totalCart: 0 }),
      )
      return initialState
    },
  )

  const { cart, totalPriceCoffees, totalCart } = cartState

  function addCoffee(data: Coffee) {
    dispatch(addCoffeeOnCart(data))
  }

  function updateCart(data: CartState) {
    dispatch(updateCartState(data))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPriceCoffees,
        totalCart,
        addCoffee,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
