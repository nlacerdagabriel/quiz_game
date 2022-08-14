import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  padding: 3rem;

  width: 30vw;

  background-color: ${theme.colors.white};

  border-radius: 0.5rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  font-weight: 700;

  text-align: center;
`
