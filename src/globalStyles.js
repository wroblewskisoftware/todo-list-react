import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
