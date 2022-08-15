import { AppProvider } from "./contexts/AppContext";
import { Container, GlobalStyle } from "./GlobalStyle";
import { ChakraProvider } from '@chakra-ui/react'
import { chakraTheme } from "./theme";
import { Routes } from "./routes";


export default function App(){
  return(
    <ChakraProvider theme={chakraTheme}>
      <AppProvider>
      <GlobalStyle/>  
      <Container>
        <Routes/>
      </Container>
    </AppProvider>
    </ChakraProvider>
  )
}