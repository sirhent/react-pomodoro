import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 8rem;
    height: 100vh;
    width: 100vw;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${props => props.theme.text_color};

    background: ${props => props.theme.default_background};
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;

    font-size: 62.5%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  main {
    display: block;
  }

  b,
  strong {
    font-weight: bolder;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
`;
