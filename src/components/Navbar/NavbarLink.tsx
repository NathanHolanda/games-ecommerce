import { Flex, Icon, Text, Link as ChakraLink, As } from "@chakra-ui/react";
import Link from "next/link"
import { useRouter } from "next/router";

interface LinkProps{
    icon: As
    link: string
    text: string
}

function NavbarLink({ icon, link, text }: LinkProps){
    const router = useRouter()

    const secondSlash = router.asPath.indexOf("/", 1)
    const asPath = secondSlash !== -1 ? 
        router.asPath.substring(0, secondSlash) : 
        router.asPath
        
    const isCurrent = asPath === link ? true : false

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
                    <Text display={["none", "block"]} fontWeight="500" color={isCurrent ? "yellow.400" : ""}>{text}</Text>
                </Flex>
            </ChakraLink>
        </Link>
    )
}

export { NavbarLink }