import { Box, Text } from "@chakra-ui/react"

function Footer(){
    return (
        <Box
          as="footer"
          position="absolute"
          bottom={0}
          w="100%"
          p="5"
          maxWidth={1200}
          textAlign="center"
        >
            <Text fontSize="md">
                Jogador Karo &copy; { new Date().getFullYear() }
            </Text>
            <Text fontSize="xs" color="gray.400">Made by Nathan Holanda</Text>
        </Box>
    )
}

export { Footer }