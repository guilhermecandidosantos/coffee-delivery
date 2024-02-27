import styled from 'styled-components'
import { texts } from '../../../styles/texts'

export const RadioContainer = styled.label`
  padding: 1rem;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  ${texts.fonts.buttonM};
  cursor: pointer;
  width: 100%;

  &[data-state='true'] {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-dark']};
  }

  input {
    display: none;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
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
