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
          borderTop="1px solid"
          borderColor="blue.600"
        >
            <Text fontSize="md" fontWeight="500">
                Jogador Karo &copy; { new Date().getFullYear() }
            </Text>
            <Text fontSize="xs" color="gray.500">Made by Nathan Holanda</Text>
        </Box>
    )
}

export { Footer }