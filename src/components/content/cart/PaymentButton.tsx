import { Flex, Button, Text } from "@chakra-ui/react"
import Link from "next/link"

interface PaymentButtonProps{
    total: number
}

function PaymentButton({ total }: PaymentButtonProps) {
    const totalPrice = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(total)

    return (
        <Flex
            justify="right"
            align="center"
            mb="6"
        >
            <Text
                fontSize="xl"
                fontWeight="500"
                mr="6"
            >
                Total: {totalPrice}
            </Text>
            <Link href="/pagamento">
                <Button colorScheme="yellow">Finalizar compra</Button>
            </Link>
        </Flex>
    )
}

export { PaymentButton }