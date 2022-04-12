import { Flex, Text } from "@chakra-ui/react"

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
        <Flex
            maxWidth={400}
            direction="column"
            align="center"
            fontFamily="'Press Start 2P', cursive"
            fontSize="2xl"
            userSelect="none"
        >
            <Flex>
                { getColorfulLetters("Jogador") }
            </Flex>
            <Flex>
                { getColorfulLetters("Karo") }
            </Flex>
            
        </Flex>
    )
}

export {Logo}