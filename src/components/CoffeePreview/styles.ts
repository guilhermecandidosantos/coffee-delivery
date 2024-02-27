import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const CoffeePreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      ${texts.fonts.textM};
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.75rem;

      button[name='remove'] {
        display: flex;
        gap: 4px;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        padding: 6px 8px;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        ${texts.fonts.buttonM};
        color: ${(props) => props.theme['base-text']};
        cursor: pointer;

        span {
          line-height: 1.3;
          color: ${(props) => props.theme.purple};
        }

        &:hover {
          background: ${(props) => props.theme['base-hover']};
          color: ${(props) => props.theme['base-subtitle']};

          span {
            color: ${(props) => props.theme['purple-dark']};
          }
        }
      }
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    ${texts.fonts.textM};
    font-weight: 700;
  }
`
