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
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  zip: z.string().min(8),
  street: z.string().min(1),
  number: z.number().min(1),
  complement: z.string().optional(),
  district: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().min(2).max(2),
  paymentMethod: z.enum(['credit', 'debit', 'money']),
})

type FormSchemaType = z.infer<typeof formSchema>

export function Cart() {
  const { cart, totalPriceCoffees } = useContext(CartContext)
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })
  const navigate = useNavigate()

  const { handleSubmit, register } = methods

  function handleSubmitForm(data: FormSchemaType) {
    console.log(data)
    navigate('/success', { replace: true })
  }

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
              <Radio
                typePayment="credit"
                description="Cartão de crédito"
                {...register('paymentMethod')}
              />
              <Radio
                typePayment="debit"
                description="Cartão de débito"
                {...register('paymentMethod')}
              />
              <Radio
                typePayment="money"
                description="Dinheiro"
                {...register('paymentMethod')}
              />
            </PaymentMethod>
          </PaymentContainer>
        </FormProvider>
      </InfosContainer>

      <PreviewContainer>
        <h1>Cafés selecionados</h1>
        <CoffeePreviewContainer>
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
