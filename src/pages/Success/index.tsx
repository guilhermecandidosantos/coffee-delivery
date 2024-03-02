import { useContext } from 'react'
import motoboy from '../../assets/motoboy.svg'
import {
  DeliveryContainer,
  TitleDeliveryContainer,
  ContentDeliveryContainer,
  InfoContainerDelivery,
  ImageDeliveryContainer,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'

export function Success() {
  const { orders } = useContext(CartContext)
  const { id } = useParams()

  const order = orders.find((order) => order.id === Number(id))!

  function verifyTypePayment(typePayment: string) {
    switch (typePayment) {
      case 'credit':
        return 'Cartão de crédito'
      case 'debit':
        return 'Cartão de débito'
      case 'money':
        return 'Dinheiro'
      default:
        return ''
    }
  }

  if (order) {
    return (
      <DeliveryContainer>
        <TitleDeliveryContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleDeliveryContainer>

        <ContentDeliveryContainer>
          <InfoContainerDelivery>
            <div>
              <span>
                <MapPin size={18} weight="fill" />
              </span>
              <p>
                Entrega em{' '}
                <strong>
                  {order.address.street}, {order.address.number}
                </strong>{' '}
                <br /> {order.address.district} - {order.address.city},{' '}
                {order.address.uf}
              </p>
            </div>

            <div>
              <span>
                <Timer size={18} weight="fill" />
              </span>
              <p>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </p>
            </div>

            <div>
              <span>
                <CurrencyDollar size={18} weight="fill" />
              </span>
              <p>
                Pagamento na entrega <br />
                <strong>{verifyTypePayment(order.typePayment)}</strong>
              </p>
            </div>
          </InfoContainerDelivery>

          <ImageDeliveryContainer>
            <img src={motoboy} alt="" />
          </ImageDeliveryContainer>
        </ContentDeliveryContainer>
      </DeliveryContainer>
    )
  } else {
    return <h1>Order not found</h1>
  }
}
