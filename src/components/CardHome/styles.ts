import styled from "styled-components"
import { theme } from "../../theme"

export const Container = styled.div`
  padding:4rem 2rem;

width: 100%;

max-width: 500px;

background-color: ${theme.colors.white};

border-radius: 0.5rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  font-weight: 700;

  text-align: center;

  margin-bottom: 2rem;
`

