import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  gap: 0.875rem;
  background: ${(props) => props.theme['base-button']};
  padding: 4px;
  border-radius: 8px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    max-width: 15px;
    background: transparent;
    font-size: 1rem;
    text-align: end;
  }
`
export const ButtonInput = styled.button`
  color: ${(props) => props.theme.purple};
  font-size: 1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;
`
