import { Box, Text } from "@chakra-ui/react"

function ProductError() {
    return (
        <Box
            w="100%"
            textAlign="center"
            fontSize={["lg", "xl", "3xl"]}
        >
            <Text>Erro ao carregar produto! 😢</Text>
            <Text>Redirecionando...</Text>
        </Box>
    )
}

export { ProductError }