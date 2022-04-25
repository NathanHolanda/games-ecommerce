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
            mb={["4","6"]}
        >
            <Text
                fontSize={["sm","md","lg","xl"]}
                fontWeight="500"
                mr={["2","4","6"]}
            >
                Total: {totalPrice}
            </Text>
            <Link href="/pagamento">
                <Button colorScheme="yellow" fontSize={["sm","md","lg"]}>Finalizar compra</Button>
            </Link>
        </Flex>
    )
}

export { PaymentButton }