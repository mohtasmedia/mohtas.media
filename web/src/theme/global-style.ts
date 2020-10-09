import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body { 
    margin: 0;
    height: 100%;
    min-height: 100%;
    color: rgb(38, 38, 38);
    font-family: ${({ theme }) => theme.font.sans};
    background-color: white;
    line-height: ${({ theme }) => theme.lineHeight.regular};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.monospace};
    font-weight: 700;
    margin: 0 0 ${({ theme }) => theme.spacing.l};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }
`;
