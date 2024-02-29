import {
  CartContainer,
  HeaderContainer,
  LocationText,
  CartIcon,
} from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { totalCart } = useContext(CartContext)
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="Coffee Delivery" />
      </a>
      <CartContainer>
        <p>
          <MapPin size={24} weight="fill" />
          <LocationText>Monte Mor, SP</LocationText>
        </p>
        <CartIcon href="/cart">
          <ShoppingCart size={24} weight="fill" />
          {totalCart > 0 ? <span>{totalCart}</span> : null}
        </CartIcon>
      </CartContainer>
    </HeaderContainer>
  )
}
