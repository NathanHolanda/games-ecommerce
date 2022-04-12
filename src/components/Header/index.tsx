import { Box, Flex, HStack } from "@chakra-ui/react"
import { Cart } from "./Cart"
import { Logo } from "./Logo"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

function Header(){
    

    return (
        <Box
            w="100%"
            p="2"
            borderBottom="1px solid"
            borderColor="yellow.400"
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
                    <Cart/>
                </Flex>
            </Flex>
        </Box>
    )
}

export { Header }