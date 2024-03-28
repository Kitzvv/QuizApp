import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;400;600;700&display=swap');


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
