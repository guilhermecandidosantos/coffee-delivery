import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  AddressContainer,
  CartContainer,
  InfosContainer,
  PreviewContainer,
  AddressTitleContainer,
  PaymentContainer,
  PaymentMethod,
  PaymentTitleContainer,
  CoffeePreviewContainer,
  TotalContainer,
} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { CoffeePreview } from '../../components/CoffeePreview'
import { InputsForm } from './InputsForm'
import { Radio } from './Radio'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import dataJSON from '../../../data.json'

export function Cart() {
  const { cart, totalPriceCoffees } = useContext(CartContext)
  const methods = useForm()

  const { handleSubmit } = methods

  function handleSubmitForm() {}

  return (
    <CartContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <InfosContainer>
        <FormProvider {...methods}>
          <h1>Complete seu pedido</h1>
          <AddressContainer>
            <AddressTitleContainer>
              <MapPinLine size={20} />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressTitleContainer>

            <InputsForm />
          </AddressContainer>

          <PaymentContainer>
            <PaymentTitleContainer>
              <CurrencyDollar size={18} />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </PaymentTitleContainer>
            <PaymentMethod>
              <Radio typePayment="credit" description="Cartão de crédito" />
              <Radio typePayment="debit" description="Cartão de débito" />
              <Radio typePayment="money" description="Dinheiro" />
            </PaymentMethod>
          </PaymentContainer>
        </FormProvider>
      </InfosContainer>

      <PreviewContainer>
        <h1>Cafés selecionados</h1>
        <CoffeePreviewContainer>
          {/* <CoffeePreview />
          <CoffeePreview /> */}

          {cart.map((c) => {
            const coffeeData = dataJSON.coffees.find(
              (coffee) => c.id === coffee.id,
            )

            let url = ''
            if (coffeeData) {
              const { image } = coffeeData
              url = image
            }
            const image = url

            const data = {
              id: c.id,
              title: c.title,
              priceCoffee: c.priceCoffee,
              quantityCoffees: c.quantityCoffees,
              image,
            }
            return <CoffeePreview key={c.id} data={data} />
          })}

          <TotalContainer>
            <div>
              <p>Total de itens</p>
              <span>
                R${' '}
                {totalPriceCoffees.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div>
              <p>Total</p>
              <span>
                R${' '}
                {(totalPriceCoffees + 3.5).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </TotalContainer>

          <button>Confirmar pedido</button>
        </CoffeePreviewContainer>
      </PreviewContainer>
    </CartContainer>
  )
}
