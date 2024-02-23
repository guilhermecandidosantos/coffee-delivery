import { useState } from 'react'
import { InputContainer, ButtonInput } from './styles'

export function InputNumber() {
  const [count, setCount] = useState(1)

  function handleIncrementCount() {
    setCount(count + 1)
  }

  function handleDecrementCount() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <InputContainer>
      <ButtonInput type="button" onClick={handleDecrementCount}>
        -
      </ButtonInput>
      <input type="number" min={1} value={count} />
      <ButtonInput type="button" onClick={handleIncrementCount}>
        +
      </ButtonInput>
    </InputContainer>
  )
}
