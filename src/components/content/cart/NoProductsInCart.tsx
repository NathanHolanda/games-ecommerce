import { Box, Icon, Button, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FaGhost } from "react-icons/fa"

function NoProductsInCart(){
    const pacmanGhostsColors = ["cyan.400", "orange.300", "red.600", "pink.200"]

    return (
        <Box textAlign="center">
            <Text fontSize="2xl">Ainda não há nenhum item no seu carrinho...</Text>
            {
                [...Array(4)].map((_, i) => (
                    <Icon
                        key={i}
                        as={FaGhost}
                        fontSize="4xl"
                        mt="2"
                        color={pacmanGhostsColors[i]}
                    />
                ))
            }
            <Box>
                <Link href="/produtos">
                    <Button mt="6" colorScheme="yellow" fontSize="lg">Bora olhar a loja!</Button>
                </Link>
            </Box>
        </Box>
    )
}

export { NoProductsInCart }