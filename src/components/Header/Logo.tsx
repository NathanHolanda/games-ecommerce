import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"

function Logo(){
    const logoColors = ["green", "cyan.600", "yellow", "red"]
    let count = 0

    const getColorfulLetters = (text: string) => {
        return text.split("").map((letter: string, index: number) => {
            count++
            if(count === 4) count = 0

            return (
                <Text
                    key={index}
                    color={`${logoColors[count]}`}
                >
                    {letter}
                </Text>
            )
        })
        
    }

    return (
        <Link href="/" passHref>
            <ChakraLink _hover={{textDecoration: "none"}} colorScheme="yellow">
                <Flex
                    maxWidth={400}
                    direction="column"
                    align="center"
                    fontFamily="'Press Start 2P', cursive"
                    fontSize={["md", "2xl"]}
                    userSelect="none"
                    cursor="pointer"
                >
                    <Flex>
                        { getColorfulLetters("Jogador") }
                    </Flex>
                    <Flex>
                        { getColorfulLetters("Karo") }
                    </Flex>
                    
                </Flex>
            </ChakraLink>
        </Link>
    )
}

export {Logo}