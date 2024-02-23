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

interface CoffeeProps {
  coffee: {
    image: string
    tags: string[]
    title: string
    description: string
    price: number
  }
}

export function CoffeeCard({ coffee }: CoffeeProps) {
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
        <InputNumber />
        <AddCartButton type="submit">
          <ShoppingCart size={22} weight="fill" />
        </AddCartButton>
      </FormContainer>
    </CoffeeContainer>
  )
}
