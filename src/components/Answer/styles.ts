import styled from "styled-components";
import { theme } from "../../theme";


export const Container = styled.button`
  
  width: 100%;
  height: 4rem;

  text-align: start;

  display: flex;
  align-items: center;
  
  border: 2px solid ${theme.colors.primary};
  border-radius: 0.5rem;

  background-color:  ${theme.colors.white};

  transition: 300ms;
  
  padding-left: 1rem;
  margin-bottom: 1rem;

  cursor: pointer;

  &:hover{
    color: ${theme.colors.white} !important;
    background-color: ${theme.colors.primary} !important;
  }

  &:disabled, &:disabled &:hover{
    pointer-events: none;
  }

`