import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Head from "next/head"
import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { useSearch } from "../contexts/useSearch"
import { api } from "../services/api"
import { Loading } from "../components/content/general/Loading"
import { Products } from "../components/content/Products";

interface Product{
    id: string,
    name: string,
    price: number,
    score: number,
    image: string
}

function Search(){
    const [ products, setProducts ] = useState<Product[]>([])
    const [ notFound, setNotFound ] = useState<boolean>(false)
    const { searched } = useSearch()

    const searchProducts = () => {
        if(searched !== "")
            api.get(`/products/search?name=${searched}`)
                .then(response => response.data.products)
                .then(products => {
                    if(products.length !== 0){
                        setNotFound(false)
                        setProducts(products)
                    }else setNotFound(true)
                })
    }

    useEffect(searchProducts, [searched])

    return (
        <>
            <Head>
                <title>Jogador Karo | Busca</title>
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
                        searched === "" ? 
                        <Box textAlign="center">
                            <Text fontSize="2xl">Procure por algum produto na nossa loja 🧐</Text>
                        </Box> : notFound ? 
                        <Box textAlign="center">
                            <Text fontSize="2xl">Desculpe, não encontramos nenhum produto com esse nome 🥺</Text>
                        </Box> : products.length > 0 ?                         
                        <>
                            <Products products={products}/>
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

export default Search