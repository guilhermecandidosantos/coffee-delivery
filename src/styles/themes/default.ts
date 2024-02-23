import { createGlobalStyle } from 'styled-components'
import { texts } from '../texts'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body, input-security, button {
    ${texts.fonts.textM}
  }
`
