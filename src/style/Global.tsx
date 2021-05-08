import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background: url(/images/backgrounds/bgwebsite.png) top right no-repeat;
    background-attachment: fixed;
    
    img {
      height: auto;
      max-width: 100%;
    }
  }
  button{
    background-color: #d6af7f !important; 
  }
`

export default GlobalStyle
