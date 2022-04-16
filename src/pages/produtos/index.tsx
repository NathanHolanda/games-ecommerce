import { Flex, Button, Stack } from "@chakra-ui/react";
import Head from "next/head"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { api } from "../../services/api"
import { Loading } from "../../components/content/general/Loading"
import { Products as ProductsComponent } from "../../components/content/Products"

interface Product{
    id: string,
    name: string,
    price: number,
    score: number,
    image: string
}

function Products(){
    const [ products, setProducts ] = useState()

    const getProducts = () => {
        api.get("/products")
            .then(response => response.data.products)
            .then(products => setProducts(products))
    }

    useEffect(getProducts, [])

    return (
        <>
            <Head>
                <title>Jogador Karo | Produtos</title>
            </Head>
            <Layout>
                <Stack
                  as="main"
                  mb="4"
                  spacing="10"
                  h={600}
                  display="flex"
                  justify="center"
                >
                    {
                        products ?
                        <>
                            <ProductsComponent products={products}/>
                            
                            <Flex justify="center">
                                <Button
                                    borderRadius={5}
                                    backgroundColor="blue.600"
                                    _hover={{ backgroundColor: "blue.700" }}
                                    w="6"
                                    h="8"
                                    mr="2"
                                    fontWeight="400"
                                    fontSize="lg"
                                >1</Button>
                                <Button
                                    borderRadius={5}
                                    backgroundColor="blue.600"
                                    _hover={{ backgroundColor: "blue.700" }}
                                    w="6"
                                    h="8"
                                    mr="2"
                                    fontWeight="400"
                                    fontSize="lg"
                                >2</Button>
                                <Button
                                    borderRadius={5}
                                    backgroundColor="blue.600"
                                    _hover={{ backgroundColor: "blue.700" }}
                                    w="6"
                                    h="8"
                                    mr="2"
                                    fontWeight="400"
                                    fontSize="lg"
                                >3</Button>
                            </Flex>
                        </> : <Loading/>
                    }
                </Stack>
            </Layout>
        </>
    )
}

/* export async function getServerSideProps(){
    const response = await api.get("/products")
    console.log(response)
    const { products } = response.data
        
    return {
        props: { products }
    }
} */

export default Products