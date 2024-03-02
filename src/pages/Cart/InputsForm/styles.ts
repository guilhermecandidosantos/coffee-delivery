import styled from 'styled-components'
import { texts } from '../../../styles/texts'

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > input:first-child {
    width: 11.6rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  div:last-child {
    input:last-child {
      max-width: 3rem;
    }

    input:nth-child(2) {
      flex: 1;
    }
  }

  input {
    ${texts.fonts.textS};
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem;
    border-radius: 4px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
    }
  }

  div {
    display: flex;
    position: relative;
    width: 100%;
    input[name='complement'] {
      flex: 1;
      width: 100%;
    }

    > span {
      position: absolute;
      right: 10px;
      top: 27%;
      ${texts.fonts.textS};
      color: ${(props) => props.theme['base-label']};
    }
  }

  input[name='uf'] {
    text-transform: uppercase;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`
