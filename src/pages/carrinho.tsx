import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import Head from "next/head"
import { Layout } from "../components/Layout"
import { useCart } from "../contexts/cart"
import { ProductCards } from "../components/content/cart/ProductCards"
import { NoProductsInCart } from "../components/content/cart/NoProductsInCart";
import { PaymentButton } from "../components/content/cart/PaymentButton";
import { ConfirmRemoveProductModal } from "../components/content/cart/ConfirmRemoveProductModal";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Cart(){
    const { status } = useSession()
    const { push } = useRouter()
    const { products } = useCart()
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if(status !== "authenticated") push("/")
    }, [])

    const total = products
        .reduce(
            (accum, product) => accum + (product.totalPrice || 0)
        , 0)

    return status === "authenticated" ? (
        <>
            <Head>
                <title>Jogador Karo | Carrinho</title>
            </Head>
            <Layout>
                <Box as="main" mb="4">
                    <Flex
                        h={500}
                        display="flex"
                        align="center"
                        justify="center"
                        my="4"
                        overflowY="auto"
                    >
                        {
                            products.length > 0 ? 
                                <ProductCards onOpen={onOpen} /> :
                                <NoProductsInCart />
                        }
                    </Flex>  
                    { 
                        products.length > 0 ?
                            <PaymentButton total={total} /> : ""
                    }
                </Box>
                <ConfirmRemoveProductModal isOpen={isOpen} onClose={onClose} />
            </Layout>
        </>
    ) : ""
}

export default Cart