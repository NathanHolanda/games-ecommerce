import { Box, Flex, SimpleGrid, Text, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, IconButton, Icon, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, ModalHeader } from "@chakra-ui/react"
import Head from "next/head"
import { Layout } from "../components/Layout"
import { useCart } from "../contexts/useCart"
import { BiTrash } from "react-icons/bi"
import { FaGhost } from "react-icons/fa"
import Link from "next/link"
import { TiCancelOutline, TiTickOutline } from "react-icons/ti"
import { BsX } from "react-icons/bs"
import { useState } from "react"

function Cart(){
    const pacmanGhostsColors = ["cyan.400", "orange.300", "red.600", "pink.200"]
    const { products, handleChangeCart, handleRemoveProduct } = useCart()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ productToBeRemoved, setProductToBeRemoved ] = useState<number>(0)

    return (
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
                                                borderRadius={5}
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
                                                        onClick={() => {
                                                            setProductToBeRemoved(Number(product.id))
                                                            onOpen()
                                                        }}
                                                    />
                                                </Box>
                                            </Flex>
                                        ))
                                    }
                                </SimpleGrid> :
                                <Box textAlign="center">
                                    <Text fontSize="2xl">Ainda não há nenhum item no seu carrinho...</Text>
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
                    { 
                        products.length > 0 ?
                            <Flex
                                justify="right"
                                align="center"
                                mb="6"
                            >
                                <Text
                                    fontSize="xl"
                                    fontWeight="500"
                                    mr="6"
                                >
                                    Total: {
                                        Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        }).format(
                                            products
                                                .reduce((accum, product) => accum + (product.totalPrice || 0), 0)
                                        )
                                    }
                                </Text>
                                <Link href="/pagamento">
                                    <Button colorScheme="yellow">Finalizar compra</Button>
                                </Link>
                            </Flex> : ""
                    }
                </Box>
                <Modal autoFocus={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent
                        backgroundColor="gray.700"
                        top="30%"
                    >
                        <ModalHeader mb="4">
                            <IconButton
                              icon={<BsX
                              />}
                              colorScheme="transparent"
                              aria-label="Fechar janela"
                              fontSize="3xl"
                              pl="1"
                              display="block"
                              marginLeft="auto"
                              onClick={onClose}
                            ></IconButton>
                        </ModalHeader>

                        <ModalBody fontSize="xl" mb="4">
                            <Text>Você quer realmente excluir este produto do seu carrinho?</Text>
                        </ModalBody>

                        <ModalFooter>
                            <IconButton
                                colorScheme="green"
                                color="gray.200"
                                mr={3}
                                onClick={() => {
                                    handleRemoveProduct(productToBeRemoved)
                                    onClose()
                                }} 
                                icon={<TiTickOutline/>}
                                fontSize="3xl"
                                aria-label="Confirmar exclusão do produto no carrinho"
                            />
                            <IconButton
                                colorScheme="red"
                                onClick={() => {
                                    setProductToBeRemoved(0)
                                    onClose()
                                }}
                                icon={<TiCancelOutline/>}
                                fontSize="3xl"
                                aria-label="Cancelar exclusão do produto no carrinho"
                            />
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Layout>
        </>
    )
}

export default Cart