import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../../styles/theme'
import { CartContextProvider } from '../contexts/cart'
import { SearchContextProvider } from '../contexts/search'
import { mirageServer } from '../services/miragejs'
import { SessionProvider } from "next-auth/react"
import { PaginationContextProvider } from '../contexts/pagination'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ConfirmRemoveProductProvider } from '../contexts/confirmRemoveProduct'

if(process.env.NODE_ENV === "development") {
  mirageServer()
}  

const queryClient = new QueryClient()

function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}> {/* Next-Auth */}
      <ChakraProvider theme={theme}> {/* Chakra-UI */} 
        <QueryClientProvider client={queryClient}> {/* React-Query */}
          <PaginationContextProvider> {/* My contexts */}
          <SearchContextProvider> 
          <ConfirmRemoveProductProvider>
          <CartContextProvider> {/***/}
            <Component {...pageProps} />
          </CartContextProvider>
          </ConfirmRemoveProductProvider>
          </SearchContextProvider>
          </PaginationContextProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp