import { Text, Box, Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PaymentForm } from "../components/content/PaymentForm"
import { Layout } from "../components/Layout"
import { useCart } from "../contexts/cart"

function Payment(){
    const { status } = useSession()
    const { push } = useRouter()
    const { products } = useCart()

    useEffect(() => {
        if(status !== "authenticated") push("/")
    }, [])

    const total = products
        .reduce((accum, product) => accum + (product.totalPrice || 0), 0)
    const totalMoney = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(total)

    return status === "authenticated" ? (
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
    ) : ""
}

export default Payment