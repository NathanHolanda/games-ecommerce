import { Flex } from "@chakra-ui/react";
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { api } from "../../services/api"
import { Product as ProductComponent } from "../../components/content/Product"
import { Loading } from "../../components/content/general/Loading"
import { ProductError } from "../../components/content/Product/ProductError"

interface Product{
    id: string,
    name: string,
    price: number,
    score: number,
    image: string
}

function Product(){
    const [ product, setProduct ] = useState<Product>()
    const [ error, setError ] = useState<boolean>(false)
    const { query: { id }, push } = useRouter()

    const getProduct = () => {
        api.get(`products/${id}`)
            .then(response => response.data.product)
            .catch(() => setError(true))
            .then(product => setProduct(product))
    }

    const redirectOnGetProductError = () => {
        setTimeout(() => {
            if(error)
                push("/produtos")
        }
    , 2000)}

    useEffect(getProduct, [])

    useEffect(redirectOnGetProductError, [error])

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="../retro-controller.png" type="image/png"/>
                <title>{`Jogador Karo | ${product?.name || "Produto não encontrado"}`}</title>
            </Head>
            <Layout>
                <Flex
                    h={600}
                    direction="column"
                    justify="center"
                    as="main"
                    mb="4"
                    textAlign="center"
                >
                    {
                        product ? <ProductComponent product={product} /> : 
                        error ? <ProductError/> : <Loading /> 
                    }
                </Flex>
            </Layout>
        </>
    )
}

export default Product