import { createGlobalStyle } from "styled-components";
import { theme as MyTheme } from "../theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => MyTheme.background[theme.background]}; 
    color:${({ theme }) => MyTheme.background[theme.background]}
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }`;
