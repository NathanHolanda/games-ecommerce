import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Head from "next/head"
import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { useSearch } from "../contexts/search"
import { api } from "../services/api"
import { Loading } from "../components/content/general/Loading"
import { Products } from "../components/content/Products";
import { Pagination } from "../components/content/general/Pagination";
import { usePagination } from "../contexts/pagination";

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
    const [ totalProducts, setTotalProducts] = useState(0)
    const { page } = usePagination()

    const searchProducts = () => {
        if(searched !== "")
            api.get(`/products/search?name=${searched}&page=${page}`)
                .then(response => {
                    setTotalProducts(Number(
                        response.headers["x-count-products"]
                    ))

                    return response.data.products
                })
                .then(products => {
                    if(products.length !== 0){
                        setNotFound(false)
                        setProducts(products)
                    }else setNotFound(true)
                })
    }

    console.log(products)

    useEffect(searchProducts, [ searched, page ])

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
                            <Pagination 
                                totalItems={totalProducts}
                                currentPage={page}
                            />
                        </> : <Loading/>
                    }       
                </Stack>
            </Layout>
        </>
    )
}

export default Search