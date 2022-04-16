import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../../styles/theme'
import { CartContextProvider } from '../contexts/useCart'
import { SearchContextProvider } from '../contexts/useSearch'
import { mirageServer } from '../services/miragejs'
import { SessionProvider } from "next-auth/react"

if(process.env.NODE_ENV === "development") {
  mirageServer()
}  

function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <SearchContextProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
        </SearchContextProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp