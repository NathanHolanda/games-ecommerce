import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../../styles/theme'
import { CartContextProvider } from '../contexts/useCart'
import { mirageServer } from '../services/miragejs'

if(process.env.NODE_ENV === "development") {
  mirageServer()
}  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default MyApp