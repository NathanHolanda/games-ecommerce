import { Box, keyframes, Text } from "@chakra-ui/react";

function Loading() {
    const loadingKeyframe = keyframes`
        0%{ color: #E2E8F0 }
        50%{ color: #718096 }
        100%{ color: #E2E8F0 }
    `
    const loadingAnimation = `${loadingKeyframe} 1.5s ease-in-out infinite`

    return (
        <Box
            w="100%"
            textAlign="center"
        >
            <Text fontSize={["lg", "xl", "3xl"]} animation={loadingAnimation}>Carregando...</Text>
        </Box>
    )
}

export { Loading }