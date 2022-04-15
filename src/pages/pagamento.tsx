import { Text, FormControl, Input, SimpleGrid, Box, Select, FormHelperText, Flex, Button } from "@chakra-ui/react"
import Head from "next/head"
import { Layout } from "../components/Layout"
import { useCart } from "../contexts/useCart"

function Payment(){
    const cardBrands = ["Visa", "MasterCard", "JCB", "Diners", "Amex", "Elo", "Aura"]
    const { products } = useCart()
    const total = products
        .reduce((accum, product) => accum + (product.totalPrice || 0), 0)

    return (
        <>
            <Head>
                <title>Jogador Karo | Pagamento</title>
            </Head>
            <Layout>
                <Flex h={600} justify="center" direction="column" as="main">
                    <Box>
                        <Text
                          textAlign="right"
                          fontSize="xl"
                          fontWeight="500"
                          mb="8"
                        >
                            Valor total: {
                            Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            }).format(total)
                        }</Text>
                    </Box>
                    <Box as="form" w="100%">
                        <Text fontSize="2xl" fontWeight="500" mb="2">Dados do cliente</Text>
                        <SimpleGrid mb="6" columns={3} spacing="5">
                            <FormControl>
                                <Input placeholder="Nome completo" focusBorderColor="yellow.700" borderColor="yellow.400" id="name" type="text" required/>
                            </FormControl>
                            <FormControl>
                                <Input placeholder="E-mail" focusBorderColor="yellow.700" borderColor="yellow.400" id="email" type="email" required/>
                            </FormControl>
                            <FormControl>
                                <Input placeholder="CPF" focusBorderColor="yellow.700" borderColor="yellow.400" id="cpf" type="text" required/>
                                <FormHelperText fontSize="xs" ml="2">Ex: 123.456.789-10</FormHelperText>
                            </FormControl>
                        </SimpleGrid>

                        <Text fontSize="2xl" fontWeight="500" mb="2">Dados do pagamento</Text>
                        <SimpleGrid columns={3} spacing="5">
                            <FormControl>
                                <Input placeholder="Número do cartão" focusBorderColor="yellow.700" borderColor="yellow.400" id="cardNumber" type="text" required/>
                                <FormHelperText fontSize="xs" ml="2">Ex: 1234 5678 9000 0000</FormHelperText>
                            </FormControl>
                            <Select focusBorderColor="yellow.700" borderColor="yellow.400" id="cardBrand" required>
                                <option value="" selected hidden disabled>Selecione um bandeira</option>	
                                {
                                    cardBrands.map(brand => (
                                        <option
                                            value={brand}
                                            style={{ background: "#2D3748" }}
                                        >
                                            {brand}
                                        </option>
                                    ))
                                }
                            </Select>
                            <FormControl>
                                <Input placeholder="Nome no cartão" focusBorderColor="yellow.700" borderColor="yellow.400" id="cardName" type="text" required/>
                            </FormControl>
                            <FormControl>
                                <Input placeholder="CPF do proprietário" focusBorderColor="yellow.700" borderColor="yellow.400" id="cardCpf" type="text" required/>
                                <FormHelperText fontSize="xs" ml="2">Ex: 123.456.789-10</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <Input placeholder="Vencimento" focusBorderColor="yellow.700" borderColor="yellow.400" id="dueDateCard" type="text" required/>
                                <FormHelperText fontSize="xs" ml="2">Ex: 11/2022</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <Input placeholder="Código de segurança" focusBorderColor="yellow.700" borderColor="yellow.400" id="securityCodeCard" type="text" required/>
                                <FormHelperText fontSize="xs" ml="2">Ex: 123</FormHelperText>
                            </FormControl>
                        </SimpleGrid>

                        <Box textAlign="center">
                            <Button mt="10" colorScheme="yellow">Confirmar compra</Button>
                        </Box>
                    </Box>
                </Flex>
            </Layout>
        </>
    )
}

export default Payment