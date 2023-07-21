import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    font-family: "Montserrat", sans-serif;
    background-color: #e6e6e6;
    word-break: break-word;
    }
`;

export default GlobalStyle;
