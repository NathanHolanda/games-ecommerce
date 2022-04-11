import { Box, Flex, HStack } from "@chakra-ui/react"
import { Cart } from "./Cart"
import { Logo } from "./Logo"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

function Header(){
    

    return (
        <Box
            maxWidth={1200}
            w="100%"
            margin="0 auto"
            borderBottom="1px solid"
            borderColor="yellow.400"
        >
            <Flex
                as="header"
                p="3"
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