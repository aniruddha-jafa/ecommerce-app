import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  global: {},
  fonts: {
    'Catamaran light': 'Catamaran, sans-serif',
    'Source Sans Pro': 'Source Sans Pro, sans-serif',
  },
  colors: {
    common: {
      white: 'white',
    },
    text: {
      primaryContrast: 'white',
    },
  },
  semanticTokens: {
    colors: {
      primary: {
        default: 'pink.500',
        _dark: '',
      },
      secondary: {
        default: 'cyan.400',
        _dark: '',
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
