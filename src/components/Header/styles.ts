import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-bottom: 2rem;
  p {
    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const LocationText = styled.span`
  color: ${(props) => props.theme['purple-dark']};
  ${texts.fonts.textS};
`
export const CartIcon = styled.a`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 4px;
  padding: 0.5rem;
  position: relative;

  > span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    ${texts.fonts.textS};
    font-weight: 700;
  }
`
