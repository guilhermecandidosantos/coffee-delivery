import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const CartContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  gap: 1rem;
`

export const InfosContainer = styled.div`
  h1 {
    ${texts.fonts.titleXS};
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
  flex: 1;
`

export const AddressContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`

export const AddressTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme['yellow-dark']};
  gap: 0.5rem;
  margin-bottom: 2rem;

  p:first-child {
    ${texts.fonts.textM};
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p:last-child {
    ${texts.fonts.textS};
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 0.75rem;
`

export const PaymentMethod = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const PaymentTitleContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  color: ${(props) => props.theme.purple};
  margin-bottom: 2rem;

  div {
    p:first-child {
      color: ${(props) => props.theme['base-subtitle']};
      ${texts.fonts.textM};
    }

    p:last-child {
      color: ${(props) => props.theme['base-text']};
      ${texts.fonts.textS};
    }
  }
`

export const PreviewContainer = styled.div`
  width: 28rem;

  h1 {
    ${texts.fonts.titleXS};
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`
export const CoffeePreviewContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.75rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > button {
    background: ${(props) => props.theme.yellow};
    padding: 0.75rem;
    ${texts.fonts.buttonG};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      ${texts.fonts.textS};
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }

    span {
      ${texts.fonts.textM};
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }
  }

  div:last-child {
    p,
    span {
      ${texts.fonts.textL};
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
