import { Box, Flex, HStack } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import { Cart } from "./Cart"
import { Logo } from "./Logo"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

function Header(){
    const { status } = useSession()

    return (
        <Box
            w="100%"
            p="4"
        >
            <Flex
                as="header"
                align="center"
                justify="space-between"
            >
                <HStack spacing="20">
                    <Logo/>
                    <SearchBox/>
                </HStack>
                <Flex>
                    <Profile/>
                    { status === "authenticated" && <Cart/> }
                </Flex>
            </Flex>
        </Box>
    )
}

export { Header }