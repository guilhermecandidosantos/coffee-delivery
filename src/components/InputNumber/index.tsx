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
  const { cart, incrementCoffee, decrementCoffee } = useContext(CartContext)
  function handleIncrementCount() {
    alterQuantityCoffee(quantityCoffee + 1)
    if (alterInPreviewCart) {
      const coffee = cart.find((c) => c.id === idCoffee)

      if (coffee) {
        let { quantityCoffees } = coffee
        quantityCoffees += 1
        const data = { ...coffee, quantityCoffees }
        incrementCoffee(data)
      }
    }
  }

  function handleDecrementCount() {
    if (quantityCoffee > 1) {
      alterQuantityCoffee(quantityCoffee - 1)
      if (alterInPreviewCart) {
        const coffee = cart.find((c) => c.id === idCoffee)

        if (coffee) {
          let { quantityCoffees } = coffee
          quantityCoffees -= 1
          const data = { ...coffee, quantityCoffees }
          decrementCoffee(data)
        }
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
