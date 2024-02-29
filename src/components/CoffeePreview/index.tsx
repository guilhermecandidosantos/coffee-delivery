import { CoffeePreviewContainer } from './styles'
import { InputNumber } from '../InputNumber'
import { Trash } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

interface CoffeePreviewProps {
  data: {
    id: number
    title: string
    priceCoffee: number
    quantityCoffees: number
    image: string
  }
}

export function CoffeePreview({ data }: CoffeePreviewProps) {
  const [quantityCoffee, setQuantityCoffee] = useState(data.quantityCoffees)
  const { cart, updateCart, totalCart, totalPriceCoffees } =
    useContext(CartContext)

  function alterQuantityCoffee(value: number) {
    setQuantityCoffee(value)
  }

  function handleRemoveCoffeeCart(id: number) {
    let totalPrice = 0
    cart.map((c) => {
      if (c.id !== id) {
        return c
      }
      totalPrice = c.priceCoffee * c.quantityCoffees
      return c
    })

    const newCart = cart.filter((c) => c.id !== id)

    const newTotalPriceCoffees = totalPriceCoffees - totalPrice
    const newTotalCart = totalCart - 1

    const data = {
      cart: newCart,
      totalPriceCoffees: newTotalPriceCoffees,
      totalCart: newTotalCart,
    }

    updateCart(data)
  }

  return (
    <CoffeePreviewContainer>
      <img src={data.image} alt="" />

      <div>
        <h3>{data.title}</h3>
        <div>
          <InputNumber
            alterQuantityCoffee={alterQuantityCoffee}
            quantityCoffee={quantityCoffee}
            alterInPreviewCart={true}
            idCoffee={data.id}
          />
          <button name="remove" onClick={() => handleRemoveCoffeeCart(data.id)}>
            <span>
              <Trash size={18} />
            </span>
            Remover
          </button>
        </div>
      </div>
      <p>
        R${' '}
        {(data.priceCoffee * quantityCoffee).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}
      </p>
    </CoffeePreviewContainer>
  )
}
