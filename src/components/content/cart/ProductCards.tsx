import { SimpleGrid, Flex, Box, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, IconButton, Image, Text } from "@chakra-ui/react"
import { Dispatch, SetStateAction, useState } from "react"
import { BiTrash } from "react-icons/bi"
import { useCart } from "../../../contexts/cart"
import { useConfirmRemoveProduct } from "../../../contexts/confirmRemoveProduct"

interface ProductsCardsProps{
    onOpen: () => void
}

function ProductCards({ onOpen }: ProductsCardsProps){
    const { products, handleChangeCart } = useCart()
    const { setIdToBeRemoved } = useConfirmRemoveProduct()

    return (
        <SimpleGrid
            spacing="5"
            columns={2}
            maxH={500}
        >
            {
                products.map(product => (
                    <Flex
                        position="relative"
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
                                    setIdToBeRemoved(Number(product.id))
                                    onOpen()
                                }}
                            />
                        </Box>
                    </Flex>
                ))
            }
        </SimpleGrid>
    )
}

export { ProductCards }