import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../../styles/theme'
import { api } from '../services/api'
import { mirageServer } from '../services/miragejs'

if(process.env.NODE_ENV === "development") {
  mirageServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp