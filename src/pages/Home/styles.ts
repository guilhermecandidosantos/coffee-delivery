import styled from 'styled-components'
import { texts } from '../../styles/texts'
import backgroundInto from '../../assets/backgroundInto.svg'

export const IntoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
`

export const TitlesContainer = styled.div``

export const InfoInto = styled.div`
  max-width: 38rem;
`

export const TitleInto = styled.p`
  ${texts.fonts.titleXL};
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 1re;
`

export const SubtitleInto = styled.p`
  ${texts.fonts.textL};
  color: ${(props) => props.theme['base-title']};
  max-width: 35rem;
  margin-bottom: 4.125rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`

export const ShoppingContainer = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  ${texts.fonts.textM}
  color: ${(props) => props.theme['base-text']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 50%;
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const PackageContainer = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  ${texts.fonts.textM}
  color: ${(props) => props.theme['base-text']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 50%;
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme['base-text']};
  }
`

export const TimerContainer = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  ${texts.fonts.textM}
  color: ${(props) => props.theme['base-text']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 50%;
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme.yellow};
  }
`

export const CoffeeImgContainer = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  ${texts.fonts.textM}
  color: ${(props) => props.theme['base-text']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 50%;
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme.purple};
  }
`

export const ImageBackgroundInto = styled.div`
  background-image: linear-gradient(
      to bottom,
      transparent 90%,
      rgba(255, 255, 255, 0.85) 100%
    ),
    linear-gradient(to right, transparent 85%, rgba(255, 255, 255, 0.85) 100%),
    linear-gradient(to left, transparent 85%, rgba(255, 255, 255, 0.85) 100%),
    url(${backgroundInto});
  background-repeat: no-repeat;
  width: 130%;
  height: 110%;
  position: absolute;
  top: 0;
  left: -15%;
  bottom: 0;
  right: 0;
  pointer-events: none;
`

export const CoffeeList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const CoffeeTitle = styled.h1`
  ${texts.fonts.titleL};
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 3.375rem;
`
