import { ShoppingCart } from '@phosphor-icons/react'
import { InputNumber } from '../InputNumber'
import {
  CoffeeContainer,
  TagsContainer,
  ImgCoffee,
  TitleCoffeeCard,
  DescriptionCoffee,
  Tags,
  FormContainer,
  AddCartButton,
} from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Coffee } from '../../reducers/cart/reducer'

interface CoffeeProps {
  coffee: {
    id: number
    image: string
    tags: string[]
    title: string
    description: string
    price: number
  }
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffee } = useContext(CartContext)
  const [quantityCoffee, setQuantityCoffee] = useState(1)

  function alterQuantityCoffee(value: number) {
    setQuantityCoffee(value)
  }

  function handleAddCoffee({
    id,
    title,
    priceCoffee,
    quantityCoffees,
  }: Coffee) {
    addCoffee({ id, title, priceCoffee, quantityCoffees })
  }

  return (
    <CoffeeContainer>
      <ImgCoffee src={coffee.image} alt="" />
      <TagsContainer>
        {coffee.tags.map((tag) => {
          return <Tags key={tag}>{tag}</Tags>
        })}
      </TagsContainer>
      <TitleCoffeeCard>{coffee.title}</TitleCoffeeCard>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

      <FormContainer>
        <p>
          R${' '}
          <label htmlFor="valueCoffee">
            {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </label>
        </p>
        <InputNumber
          alterQuantityCoffee={alterQuantityCoffee}
          quantityCoffee={quantityCoffee}
        />
        <AddCartButton
          type="button"
          onClick={() => {
            handleAddCoffee({
              id: coffee.id,
              title: coffee.title,
              priceCoffee: Number(coffee.price.toFixed(2)),
              quantityCoffees: quantityCoffee,
            })
          }}
        >
          <ShoppingCart size={22} weight="fill" />
        </AddCartButton>
      </FormContainer>
    </CoffeeContainer>
  )
}
