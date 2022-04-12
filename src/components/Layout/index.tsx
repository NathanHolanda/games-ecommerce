import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Header } from "../Header"
import { Navbar } from "../Navbar"

interface LayoutProps{
    children: ReactNode
}

function Layout({ children }: LayoutProps){
    return (
        <Box p="3" maxWidth={1200} margin="0 auto">
            <Header/>
            <Navbar/>
            { children }
        </Box>
    )
}

export { Layout }