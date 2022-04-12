import { Flex, Icon, Text, Link as ChakraLink, As } from "@chakra-ui/react";

interface LinkProps{
    icon: As
    text: string
}

function Link({ icon, text }: LinkProps){
    return (
        <ChakraLink mr="5">
            <Flex
                align="center"
                fontSize="xl"
            >
                <Icon as={icon} mr="1" color="yellow.400"/>
                <Text fontWeight="500">{text}</Text>
            </Flex>
        </ChakraLink>
    )
}

export { Link }