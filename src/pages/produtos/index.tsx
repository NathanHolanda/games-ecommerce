import { Stack } from "@chakra-ui/react";
import Head from "next/head"
import { Layout } from "../../components/Layout"
import { Loading } from "../../components/content/general/Loading"
import { Products as ProductsComponent } from "../../components/content/Products"
import { Pagination } from "../../components/content/general/Pagination";
import { usePagination } from "../../contexts/pagination";
import { useProducts } from "../../hooks/products";

function Products(){
    const { page } = usePagination()
    const query = useProducts(`/products?page=${page}`, page)

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
                        query.isLoading && !query.isFetched ?
                        <Loading/> : query.data ?
                        <>
                            <ProductsComponent products={query.data.products}/>
                            <Pagination 
                                totalItems={query.data.total}
                                currentPage={page}
                            />
                        </> : ""
                    }
                </Stack>
            </Layout>
        </>
    )
}

export default Products