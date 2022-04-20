import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../../styles/theme'
import { CartContextProvider } from '../contexts/cart'
import { SearchContextProvider } from '../contexts/search'
import { mirageServer } from '../services/miragejs'
import { SessionProvider } from "next-auth/react"
import { PaginationContextProvider } from '../contexts/pagination'

if(process.env.NODE_ENV === "development") {
  mirageServer()
}  

function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <PaginationContextProvider>
        <SearchContextProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
        </SearchContextProvider>
        </PaginationContextProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp