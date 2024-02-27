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

export function Cart() {
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
              <Radio typePayment="credit" />
              <Radio typePayment="debit" />
              <Radio typePayment="money" />
            </PaymentMethod>
          </PaymentContainer>
        </FormProvider>
      </InfosContainer>

      <PreviewContainer>
        <h1>Cafés selecionados</h1>
        <CoffeePreviewContainer>
          <CoffeePreview />
          <CoffeePreview />

          <TotalContainer>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </TotalContainer>

          <button>Confirmar pedido</button>
        </CoffeePreviewContainer>
      </PreviewContainer>
    </CartContainer>
  )
}
