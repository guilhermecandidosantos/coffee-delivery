import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const CoffeeContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  max-width: 16rem;
  max-height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 15%;
  border-bottom-left-radius: 15%;
`

export const ImgCoffee = styled.img`
  margin-top: -3rem;
  margin-bottom: 0.875rem;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;
  justify-content: center;
`

export const Tags = styled.span`
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 2px 8px;
  ${texts.fonts.tag};
  text-align: center;
`
export const TitleCoffeeCard = styled.h1`
  ${texts.fonts.titleS};
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`
export const DescriptionCoffee = styled.p`
  ${texts.fonts.textS};
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2rem;
  text-align: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  p {
    margin-right: 0.5rem;
    ${texts.fonts.textS};
    color: ${(props) => props.theme['base-text']};

    label {
      ${texts.fonts.titleM};
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const AddCartButton = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['base-card']};
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  cursor: pointer;
`
