import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { api } from "../../services/api"
import { BsCartPlus } from "react-icons/bs";

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

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        setTimeout(() => {
            if(error)
                router.push("/produtos")
        }
    , 2000)}, [error])

    useEffect(() => {
        api.get(`products/${id}`)
            .then(response => response.data.product)
            .catch(() => setError(true))
            .then(product => setProduct(product))
    }, [])

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
                    textAlign="center"
                >
                    {
                        product ? (
                            <Flex
                                direction="column"
                                align="center"
                                backgroundColor="gray.800"
                                m="0 auto"
                                py="5"
                                px="2"
                                boxSize="md"
                                borderRadius={5}
                                cursor="pointer"
                                transition="transform 0.2s"
                            >
                                    <Flex justify="center" boxSize="md">
                                        <Image
                                            src={`../${product.image}`}
                                            alt={product.name}
                                            title={product.name}
                                        />
                                    </Flex>
                                    <Box mt="4">
                                        <Text
                                            fontSize="xl"
                                            color="yellow.400"
                                            fontWeight="500"
                                        >{product.name}</Text>
                                        <Text
                                            fontSize="md"
                                            textAlign="center"
                                            color="gray.400"
                                        >
                                            Preço: {
                                                Intl.NumberFormat("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL"
                                                }).format(product.price)
                                            }
                                        </Text>
                                        <IconButton
                                            colorScheme="yellow"
                                            mt="5"
                                            aria-label="Adicionar ao carrinho"
                                            fontSize="4xl"
                                            p="4"
                                            icon={<BsCartPlus/>}
                                        />
                                    </Box>
                            </Flex> 
                        ) : error ?
                        (
                            <Box
                                w="100%"
                                textAlign="center"
                                fontSize="3xl"
                            >
                                <Text>Erro ao carregar produto! 😢</Text>
                                <Text>Redirecionando...</Text>
                            </Box>
                        ) :
                        (
                            <Box
                                w="100%"
                                textAlign="center"
                            >
                                <Text fontSize="3xl">Carregando...</Text>
                            </Box>
                        )
                    }
                </Flex>
            </Layout>
        </>
    )
}

export default Product