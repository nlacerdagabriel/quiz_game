import { extendTheme } from "@chakra-ui/react";

export const theme = {
  colors: {
    primary: "#006989",
    black: "#0c090d",
    white: "#FFF",
    success: "#8dab7f",
    danger: "#f15946",
  },
};

export const chakraTheme = extendTheme({
  colors: {
    primary: {
      50: '#dbfbff',
     100: '#afeeff',
     200: '#80e1ff',
     300: '#52d5fe',
     400: '#2ec9fd',
     500: '#1fb0e4',
     600: '#0f89b2',
     700: '#006280',
     800: '#003b4f',
     900: '#00151e',
    }
  },
});
