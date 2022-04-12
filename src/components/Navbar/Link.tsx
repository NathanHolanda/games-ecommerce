import { Flex, Icon, Text, Link as ChakraLink, As } from "@chakra-ui/react";
import Link from "next/link"

interface LinkProps{
    icon: As
    link: string
    text: string
    isCurrent?: boolean
}

function NavbarLink({ icon, link, text, isCurrent }: LinkProps){
    return (
        <Link href={link} passHref>
            <ChakraLink
            mr="5"
            _hover={{
                textDecoration: "underline solid 2px",
                textDecorationColor: "yellow.400"
            }}
            >
                <Flex
                    align="center"
                    fontSize="xl"
                >
                    <Icon as={icon} mr="1" color="yellow.400"/>
                    <Text fontWeight="500" color={isCurrent ? "yellow.400" : ""}>{text}</Text>
                </Flex>
            </ChakraLink>
        </Link>
    )
}

export { NavbarLink }