import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { CartContextProvider } from '../../context/CartContext'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </LayoutContainer>
  )
}
