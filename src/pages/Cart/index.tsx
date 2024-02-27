import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressContainer,
  CartContainer,
  InfosContainer,
  PreviewContainer,
  InputsContainer,
  AddressTitleContainer,
  PaymentContainer,
  RadioContainer,
  PaymentMethod,
  PaymentTitleContainer,
  CoffeePreviewContainer,
  TotalContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { CoffeePreview } from '../../components/CoffeePreview'

export function Cart() {
  const { register, handleSubmit, watch } = useForm()

  const paymentSelected = watch('paymentMethod')

  function handleSubmitForm() {}

  return (
    <CartContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <InfosContainer>
        <h1>Complete seu pedido</h1>
        <AddressContainer>
          <AddressTitleContainer>
            <MapPinLine size={20} />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressTitleContainer>

          <InputsContainer>
            <input type="text" placeholder="CEP" {...register('zip')} />
            <input type="text" placeholder="Rua" {...register('street')} />
            <div>
              <input type="text" placeholder="Número" {...register('number')} />
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                {...register('district')}
              />
              <input type="text" placeholder="Cidade" {...register('city')} />
              <input type="text" placeholder="UF" {...register('uf')} />
            </div>
          </InputsContainer>
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
            <RadioContainer data-state={paymentSelected === 'credit'}>
              <input
                type="radio"
                {...register('paymentMethod')}
                value="credit"
              />
              <CreditCard size={18} />
              Cartão de credito
            </RadioContainer>

            <RadioContainer data-state={paymentSelected === 'debit'}>
              <input
                type="radio"
                {...register('paymentMethod')}
                value="debit"
              />
              <Bank size={18} />
              Cartão de debito
            </RadioContainer>

            <RadioContainer data-state={paymentSelected === 'money'}>
              <input
                type="radio"
                {...register('paymentMethod')}
                value="money"
              />
              <Money size={18} />
              Dinheiro
            </RadioContainer>
          </PaymentMethod>
        </PaymentContainer>
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
