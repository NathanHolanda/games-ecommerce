import { Stack } from "@chakra-ui/react";
import Head from "next/head"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { api } from "../../services/api"
import { Loading } from "../../components/content/general/Loading"
import { Products as ProductsComponent } from "../../components/content/Products"
import { Pagination } from "../../components/content/general/Pagination";
import { usePagination } from "../../contexts/pagination";

function Products(){
    const [ products, setProducts ] = useState([])
    const [ totalProducts, setTotalProducts] = useState(0)
    const { page } = usePagination()

    const getProducts = () => {
        api.get(`/products?page=${page}`)
            .then(response => {
                setTotalProducts(Number(
                    response.headers["x-count-products"]
                ))

                return response.data.products
            })
            .then(products => setProducts(products))
    }

    useEffect(getProducts, [ page ])

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
                        products.length > 0 ?
                        <>
                            <ProductsComponent products={products}/>
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

/* export async function getServerSideProps(){
    const response = await api.get("/products")

    const { products } = response.data
        
    return {
        props: { products }
    }
} */

export default Products