import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  global: {},
  fonts: {
    'Catamaran-light': 'Catamaran, sans-serif',
  },
  semanticTokens: {
    colors: {
      common: {
        white: 'white',
      },
      primary: {
        default: 'pink.500',
      },
      secondary: {
        default: 'cyan.400',
      },
    },
  },
  // colors: {
  //   primary: {
  //     default: 'teal',
  //     contrastText: 'white',
  //   },
  // },
})

export default theme
