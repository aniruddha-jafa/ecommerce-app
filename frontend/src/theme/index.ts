import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: {
      main: 'teal',
      contrastText: 'white',
    },
  },
})

export default theme
