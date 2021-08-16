import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: {
          "html, body": {
            color: "gray.600",
            lineHeight: "tall",
          },
          a: {
            color: "teal.500",
          },
        },
      },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    body: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",
    heading:
      "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
  },
  fontFamily: {
    poppins: "Poppins"
  },
  config: {
    initialColorMode: "dark"
  }
})

export default theme;