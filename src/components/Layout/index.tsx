import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Navbar } from "../Navbar"

interface LayoutProps{
    children: ReactNode
}

function Layout({ children }: LayoutProps){
    return (
        <Box minH="100vh" p="3" maxWidth={1200} margin="0 auto">
            <Header/>
            <Navbar/>
            { children }
            <Footer/>
        </Box>
    )
}

export { Layout }