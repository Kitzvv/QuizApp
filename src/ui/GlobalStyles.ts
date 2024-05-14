import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
    }

    html {
        overflow: hidden;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }




`;

export default GlobalStyles;
