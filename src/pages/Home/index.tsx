import {
  ImageBackgroundInto,
  InfoInto,
  IntoContainer,
  TitleInto,
  TitlesContainer,
  GridContainer,
  ShoppingContainer,
  PackageContainer,
  TimerContainer,
  CoffeeImgContainer,
  SubtitleInto,
  CoffeeTitle,
  CoffeeList,
} from './styles'
import coffee from '../../assets/coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../../data.json'

export function Home() {
  return (
    <div>
      <IntoContainer>
        <InfoInto>
          <TitlesContainer>
            <TitleInto>
              Encontre o café perfeito para qualquer hora do dia
            </TitleInto>
            <SubtitleInto>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </SubtitleInto>
          </TitlesContainer>

          <GridContainer>
            <ShoppingContainer>
              <span>
                <ShoppingCart size={18} weight="fill" />
              </span>
              Compra simples e segura
            </ShoppingContainer>
            <PackageContainer>
              <span>
                <Package size={18} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </PackageContainer>
            <TimerContainer>
              <span>
                <Timer size={18} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </TimerContainer>
            <CoffeeImgContainer>
              <span>
                <Coffee size={18} weight="fill" />
              </span>
              O café chega fresquinho até você
            </CoffeeImgContainer>
          </GridContainer>
        </InfoInto>

        <img src={coffee} alt="" />
        <ImageBackgroundInto />
      </IntoContainer>

      <div>
        <CoffeeTitle>Nossos cafés</CoffeeTitle>

        <CoffeeList>
          {coffees.map((coffee) => {
            return <CoffeeCard coffee={coffee} key={coffee.id} />
          })}
        </CoffeeList>
      </div>
    </div>
  )
}
