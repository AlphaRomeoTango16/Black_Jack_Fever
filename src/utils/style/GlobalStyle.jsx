import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

export default GlobalStyle