import { useContext } from 'react'
import { InputContainer, ButtonInput } from './styles'
import { CartContext } from '../../context/CartContext'

interface InputNumberProps {
  alterQuantityCoffee: (value: number) => void
  quantityCoffee: number
  alterInPreviewCart?: boolean
  idCoffee?: number
}

export function InputNumber({
  alterQuantityCoffee,
  quantityCoffee,
  alterInPreviewCart = false,
  idCoffee,
}: InputNumberProps) {
  const { cart, updateCart, totalCart } = useContext(CartContext)
  function handleIncrementCount() {
    alterQuantityCoffee(quantityCoffee + 1)
    if (alterInPreviewCart) {
      const value = quantityCoffee
      const newCart = cart.map((c) => {
        if (c.id === idCoffee) {
          return { ...c, quantityCoffees: value + 1 }
        }
        return c
      })

      const prices = newCart.map((c) => c.priceCoffee * c.quantityCoffees)
      const totalPriceCoffees = prices.reduce((total, value) => {
        return (total += value)
      })

      const data = {
        cart: newCart,
        totalPriceCoffees,
        totalCart,
      }

      updateCart(data)
    }
  }

  function handleDecrementCount() {
    if (quantityCoffee > 1) {
      alterQuantityCoffee(quantityCoffee - 1)
      if (alterInPreviewCart) {
        const value = quantityCoffee
        const newCart = cart.map((c) => {
          if (c.id === idCoffee) {
            return { ...c, quantityCoffees: value - 1 }
          }
          return c
        })

        const prices = newCart.map((c) => c.priceCoffee * c.quantityCoffees)
        const totalPriceCoffees = prices.reduce((total, value) => {
          return (total += value)
        })

        const data = {
          cart: newCart,
          totalPriceCoffees,
          totalCart,
        }

        updateCart(data)
      }
    }
  }

  return (
    <InputContainer>
      <ButtonInput type="button" onClick={handleDecrementCount}>
        -
      </ButtonInput>
      <input type="number" min={1} value={quantityCoffee} readOnly />
      <ButtonInput type="button" onClick={handleIncrementCount}>
        +
      </ButtonInput>
    </InputContainer>
  )
}
