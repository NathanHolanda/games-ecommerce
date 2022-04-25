import { SimpleGrid, Flex, Box, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, IconButton, Image, Text } from "@chakra-ui/react"
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
            columns={[1,1,2]}
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
                        <Box mr="6" w={["70px","90px"]}>
                            <Image w="100%" src={ product.image } alt={ product.name }/>
                        </Box>
                        <Box mr="6">
                            <Text
                                fontSize={["sm","md","lg"]}
                                fontWeight="500"
                                color="yellow.400"
                                mb="2"
                            >
                                { product.name }
                            </Text>
                            <Text fontSize={["xs","sm"]} color="gray.400">Valor unitário: { 
                                Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                }).format(product.price)
                            }</Text>
                            <Flex>
                                <Text fontSize={["xs","sm"]} color="gray.400">Quantidade: </Text>
                                <NumberInput
                                    position="relative"
                                    top={["-0.5","0"]}
                                    maxW={[10,16]}
                                    maxH={[3, 8]}
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
                                        position="relative"
                                        top={["-0.5","0"]}
                                        backgroundColor="gray.800"
                                        color="gray.400"
                                        fontSize={["xs","sm"]}
                                        borderColor="transparent"
                                        ml="1"
                                        h="6"
                                    />
                                    <NumberInputStepper 
                                        borderColor="transparent"
                                        w={["2","4"]}
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
                            <Text fontSize={["xs","sm"]} color="gray.400">Valor total: {
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
                                fontSize={["sm","lg"]}
                                h={[6, 10]}
                                minW={[6, 10]}
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