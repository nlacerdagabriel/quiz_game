import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;
  }



`

export const Container = styled.div`
  background-color: ${theme.colors.primary};
  min-height: 100vh;  

  display: flex;
  align-items: center;
  justify-content: center;
`