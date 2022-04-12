import { Box, SimpleGrid, Image, Flex, Text, keyframes, Button, Stack } from "@chakra-ui/react"
import Link from "next/link"
import Head from "next/head"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { api } from "../../services/api"

interface Product{
    id: string,
    name: string,
    price: number,
    score: number,
    image: string
}

function Products(){
    const [ products, setProducts ] = useState<Product[]>()

    useEffect(() => {
        api.get("/products")
            .then(response => response.data.products)
            .then(products => setProducts(products))
    }, [])

    console.log(products)

    const loadingKeyframe = keyframes`
        0%{ color: #E2E8F0 }
        50%{ color: #718096 }
        100%{ color: #E2E8F0 }
    `
    const loadingAnimation = `${loadingKeyframe} 1.5s ease-in-out infinite`

    return (
        <>
            <Head>
                <title>Jogador Karo | Produtos</title>
            </Head>
            <Layout>
                <Stack
                  spacing="8"
                  h={600}
                  display="flex"
                  direction="column"
                  justify="center"
                >
                    {
                        products ? (
                            <>
                                <SimpleGrid
                                    as="main"
                                    minChildWidth={100}
                                    columns={3}
                                    spacing={10}
                                    h={300}
                                >
                                {     
                                        products.map(product => {
                                            return (
                                                <Link href={`/produtos/${product.id}`}>
                                                    <Flex
                                                        direction="column"
                                                        align="center"
                                                        backgroundColor="gray.800"
                                                        py="5"
                                                        px="2"
                                                        borderRadius={5}
                                                        cursor="pointer"
                                                        transition="transform 0.2s"
                                                        _hover={{
                                                            transform: "scale(1.1, 1.1)"
                                                        }}
                                                    >
                                                        <Flex justify="center">
                                                            <Image
                                                            src={product.image}
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
                                                        </Box>
                                                    </Flex>
                                                </Link>
                                            )
                                        }) 
                                    }
                                </SimpleGrid>
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
                            </>
                        ) : (
                            <Box
                              w="100%"
                              textAlign="center"
                            >
                                <Text fontSize="3xl" animation={loadingAnimation}>Carregando...</Text>
                            </Box>
                        )
                    }
                </Stack>
            </Layout>
        </>
    )
}

export default Products