import { Box, Flex, SimpleGrid, Text, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, IconButton, Icon, Button } from "@chakra-ui/react"
import Head from "next/head"
import { Layout } from "../components/Layout"
import { useCart } from "../contexts/useCart"
import { BiTrash } from "react-icons/bi"
import { FaGhost } from "react-icons/fa"
import Link from "next/link"

interface Product{
    name: string
    image: string
    price: number
    quantity: number
    totalPrice?: number
}


function Cart(){
    const pacmanGhostsColors = ["cyan.400", "orange.300", "red.600", "pink.200"]
    const { products, handleChangeCart, handleRemoveProduct } = useCart()

    return (
        <>
            <Head>
                <title>Jogador Karo | Carrinho</title>
            </Head>
            <Layout>
                <Flex
                    as="main"
                    h={600}
                    display="flex"
                    align="center"
                    justify="center"
                >
                    {
                        products.length > 0 ? 
                            <SimpleGrid
                                spacing="10"
                                columns={2}
                                overflowY="auto"
                            >
                                {
                                    products.map(product => (
                                        <Flex
                                            p="4"
                                            align="center"
                                            justify="flex-start"
                                            backgroundColor="gray.800"
                                            key={product.id}
                                        > 
                                            <Box mr="6">
                                                <Image w="100px" src={ product.image } alt={ product.name }/>
                                            </Box>
                                            <Box mr="6">
                                                <Text
                                                  fontSize="lg"
                                                  fontWeight="500"
                                                  color="yellow.400"
                                                  mb="2"
                                                >
                                                    { product.name }
                                                </Text>
                                                <Text fontSize="sm" color="gray.400">Valor unitário: { 
                                                    Intl.NumberFormat("pt-BR", {
                                                        style: "currency",
                                                        currency: "BRL"
                                                    }).format(product.price)
                                                }</Text>
                                                <Flex>
                                                    <Text fontSize="sm" color="gray.400">Quantidade: </Text>
                                                    <NumberInput
                                                        /* position="relative"
                                                        top="-0.5" */
                                                        size='sm'
                                                        maxW={16}
                                                        maxH={8}
                                                        defaultValue={1}
                                                        min={1}
                                                        value={ product.quantity }
                                                        onChange={
                                                            value => handleChangeCart({
                                                                ...product,
                                                                quantity: Number(value)
                                                            })
                                                        }
                                                    >
                                                        <NumberInputField
                                                            backgroundColor="gray.800"
                                                            color="gray.400"
                                                            fontSize="sm"
                                                            borderColor="transparent"
                                                            ml="1"
                                                            h="6"
                                                        />
                                                        <NumberInputStepper 
                                                            borderColor="transparent"
                                                            w="4"
                                                        >
                                                            <NumberIncrementStepper 
                                                                color="gray.400"
                                                                fontSize={8}
                                                                borderColor="transparent"
                                                            />
                                                            <NumberDecrementStepper
                                                                color="gray.400"
                                                                fontSize={8}
                                                                borderColor="transparent"
                                                            />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </Flex>
                                                <Text fontSize="sm" color="gray.400">Valor total: {
                                                    Intl.NumberFormat("pt-BR", {
                                                        style: "currency",
                                                        currency: "BRL"
                                                    }).format(Number(product.totalPrice))
                                                }</Text>
                                            </Box>
                                            <Box marginLeft="auto">
                                                <IconButton
                                                    aria-label="Remover produto do carrinho"
                                                    icon={<BiTrash/>}
                                                    fontSize="lg"
                                                    colorScheme="red"
                                                    onClick={ () => handleRemoveProduct(Number(product.id)) }
                                                />
                                            </Box>
                                        </Flex>
                                    ))
                                }
                            </SimpleGrid> :
                            <Box textAlign="center">
                                <Text fontSize="2xl">Ainda não há nenhum item no seu carrinho... </Text>
                                {
                                    [...Array(4)].map((_, i) => (
                                        <Icon
                                            key={i}
                                            as={FaGhost}
                                            fontSize="4xl"
                                            mt="2"
                                            color={pacmanGhostsColors[i]}
                                        />
                                    ))
                                }
                                <Box>
                                    <Link href="/produtos">
                                        <Button mt="6" colorScheme="yellow" fontSize="lg">Bora olhar a loja!</Button>
                                    </Link>
                                </Box>
                            </Box>
                    }
                </Flex>
            </Layout>
        </>
    )
}

export default Cart