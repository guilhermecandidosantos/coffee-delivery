import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TitleDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 2.5rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    ${texts.fonts.titleL}
  }

  p {
    ${texts.fonts.textL};
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ContentDeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  > div {
    flex: 1;
  }
`
export const InfoContainerDelivery = styled.div`
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
  padding: 2.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    p {
      ${texts.fonts.textM};
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
      > span {
        background: white;
        display: inline;
        color: transparent;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.background};
    }

    &:nth-child(1) {
      span {
        background: ${(props) => props.theme.purple};
      }
    }

    &:nth-child(2) {
      span {
        background: ${(props) => props.theme.yellow};
      }
    }

    &:nth-child(3) {
      span {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
export const ImageDeliveryContainer = styled.div`
  display: flex;
  justify-content: end;
`
