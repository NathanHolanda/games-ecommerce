import { Text, Box, Flex } from "@chakra-ui/react";
import Head from "next/head"
import { PaymentForm } from "../components/content/PaymentForm"
import { Layout } from "../components/Layout"
import { useCart } from "../contexts/useCart"

function Payment(){
    const { products } = useCart()
    const total = products
        .reduce((accum, product) => accum + (product.totalPrice || 0), 0)
    const totalMoney = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(total)

    return (
        <>
            <Head>
                <title>Jogador Karo | Pagamento</title>
            </Head>
            <Layout>
                <Flex h={600} justify="center" direction="column" as="main">
                    <Box>
                        <Text
                          textAlign="right"
                          fontSize="xl"
                          fontWeight="500"
                          mb="8"
                        >
                            Valor total: { totalMoney }</Text>
                    </Box>
                    <PaymentForm />
                </Flex>
            </Layout>
        </>
    )
}

export default Payment