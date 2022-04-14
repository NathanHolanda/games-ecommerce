import { Box, Flex, IconButton, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"
import ReactStars from "react-rating-stars-component"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { api } from "../../services/api"
import { BsCartPlus } from "react-icons/bs";
import { useCart } from "../../contexts/useCart"

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

    const { products, handleChangeChart } = useCart()

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
                                        <Flex align="center" justify="space-between">
                                            <Box>
                                                <ReactStars
                                                    count={5}
                                                    value={Math.ceil((product.score * 5)/400)}
                                                    edit={true}
                                                    /* onChange={ratingChanged} */
                                                    size={24}
                                                    activeColor="#B7791F"
                                                />
                                                <Text
                                                    fontSize="md"
                                                    ml="1"
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
                                              maxH={8}
                                              defaultValue={1}
                                              min={1}
                                              value={productQuantity}
                                              onChange={value => setProductQuantity(Number(value))}
                                            >
                                                <NumberInputField
                                                    backgroundColor="gray.600"
                                                    color="gray.200"
                                                    borderColor="gray.200"
                                                />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper
                                                        bg='green.800'
                                                        _active={{ bg: 'green.800' }}
                                                        children='+'
                                                    />
                                                    <NumberDecrementStepper
                                                        bg='red.800'
                                                        _active={{ bg: 'red.800' }}
                                                        children='-'
                                                    />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </Flex>
                                        <IconButton
                                            colorScheme="yellow"
                                            aria-label="Adicionar ao carrinho"
                                            fontSize="4xl"
                                            mt="8"
                                            p="6"
                                            icon={<BsCartPlus/>}
                                            onClick={() => {
                                                handleChangeChart({
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    image: product.image,
                                                    quantity: productQuantity,
                                                })
                                            }}
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