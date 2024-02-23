import {
  CartContainer,
  HeaderContainer,
  LocationText,
  CartIcon,
} from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery" />
      <CartContainer>
        <p>
          <MapPin size={24} weight="fill" />
          <LocationText>Monte Mor, SP</LocationText>
        </p>
        <CartIcon>
          <ShoppingCart size={24} weight="fill" />
        </CartIcon>
      </CartContainer>
    </HeaderContainer>
  )
}
