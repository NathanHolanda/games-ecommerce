import { Box, Flex, IconButton, Image, keyframes, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text, useDisclosure } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { api } from "../../services/api"
import { BsCartPlus } from "react-icons/bs"
import { useCart } from "../../contexts/useCart"
import StarRatings from "react-star-ratings"

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
    const [ productQuantity, setProductQuantity ] = useState<number>(1)

    const router = useRouter()
    const { id } = router.query

    const { handleChangeCart } = useCart()

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

    const loadingKeyframe = keyframes`
        0%{ color: #E2E8F0 }
        50%{ color: #718096 }
        100%{ color: #E2E8F0 }
    `
    const loadingAnimation = `${loadingKeyframe} 1.5s ease-in-out infinite`

    const { isOpen, onClose, onOpen } = useDisclosure()

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
                    mb="4"
                    textAlign="center"
                >
                    {
                        product ? 
                            <Flex
                                direction="column"
                                align="center"
                                backgroundColor="gray.800"
                                m="0 auto"
                                py="6"
                                px="2"
                                boxSize="md"
                                borderRadius={5}
                                transition="transform 0.2s"
                                maxW={350}
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
                                        <Flex align="center" justify="space-between">
                                            <Box mr="4">
                                                <StarRatings
                                                    rating={Math.ceil((product.score*5)/400)}
                                                    starRatedColor="#c28919"
                                                    starDimension="20px"
                                                    changeRating={value => {}}
                                                    starHoverColor="#3182CE"
                                                    starSpacing="2px"
                                                    numberOfStars={5}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    ml="1"
                                                    mt="2"
                                                    textAlign="left"
                                                    color="gray.400"
                                                >
                                                    {
                                                        Intl.NumberFormat("pt-BR", {
                                                            style: "currency",
                                                            currency: "BRL"
                                                        }).format(product.price * productQuantity)
                                                    }
                                                </Text>
                                            </Box>
                                            <NumberInput
                                              size='sm'
                                              maxW={16}
                                              defaultValue={1}
                                              min={1}
                                              value={productQuantity}
                                              onChange={value => setProductQuantity(Number(value))}
                                            >
                                                <NumberInputField
                                                    backgroundColor="gray.600"
                                                    color="gray.200"
                                                    borderColor="gray.500"
                                                    h="32px"
                                                />
                                                <NumberInputStepper borderColor="gray.500" color="gray.200">
                                                    <NumberIncrementStepper
                                                        bg="green.800"
                                                        _active={{ bg: "green.800" }}
                                                        children="+"
                                                        fontSize="md"
                                                        h={15}
                                                        borderColor="gray.500"
                                                    />
                                                    <NumberDecrementStepper
                                                        bg="red.800"
                                                        _active={{ bg: "red.800" }}
                                                        children="-"
                                                        fontSize="md"
                                                        h={15}
                                                        borderColor="gray.500"
                                                    />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </Flex>
                                        <Popover
                                          isOpen={isOpen}
                                          onClose={onClose}
                                          placement="right"
                                          autoFocus={false}
                                          arrowShadowColor="gray.700"
                                          arrowSize={12}
                                        >
                                            <PopoverTrigger>
                                                <IconButton
                                                    colorScheme="yellow"
                                                    aria-label="Adicionar ao carrinho"
                                                    fontSize="4xl"
                                                    mt="6"
                                                    p="6"
                                                    icon={<BsCartPlus/>}
                                                    onClick={() => {
                                                        onOpen()

                                                        handleChangeCart({
                                                            id: product.id,
                                                            name: product.name,
                                                            price: product.price,
                                                            image: product.image,
                                                            quantity: productQuantity,
                                                        })
                                                        
                                                        setTimeout(() => onClose(), 2000)
                                                    }}
                                                />
                                            </PopoverTrigger>
                                            <PopoverContent
                                              bg="gray.600"
                                              color="gray.200"
                                              w={120}
                                              ml="1"
                                              borderRadius={10}
                                              borderColor="gray.600"
                                            >
                                                <PopoverArrow bg="gray.600"/>
                                                <PopoverBody p="2">
                                                    <Text fontSize="md" fontWeight="500">Adicionado ao carrinho</Text>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </Box>
                            </Flex> : error ?
                            <Box
                                w="100%"
                                textAlign="center"
                                fontSize="3xl"
                            >
                                <Text>Erro ao carregar produto! 😢</Text>
                                <Text>Redirecionando...</Text>
                            </Box> :
                            <Box
                                w="100%"
                                textAlign="center"
                            >
                                <Text fontSize="3xl" animation={loadingAnimation}>Carregando...</Text>
                            </Box>
                    }
                </Flex>
            </Layout>
        </>
    )
}

export default Product