import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { FormInput } from "./FormInput"
import { FormSelect } from "./FormSelect"

function PaymentForm(){
    const cardBrands = ["Visa", "MasterCard", "JCB", "Diners", "Amex", "Elo", "Aura"]

    return (
        <Box as="form" w="100%">
            <Text fontSize="2xl" fontWeight="500" mb="2">Dados do cliente</Text>
            <SimpleGrid mb="6" columns={3} spacing="5">
                <FormInput placeholder="Nome completo" id="nome" type="text" />
                
                <FormInput placeholder="E-mail" id="email" type="email" />

                <FormInput placeholder="CPF" id="cpf" type="text" helper="Ex: 123.456.789-10" />
            </SimpleGrid>

            <Text fontSize="2xl" fontWeight="500" mb="2">Dados do pagamento</Text>
            <SimpleGrid columns={3} spacing="5">
                <FormInput placeholder="Número do cartão" id="cardNumber" type="text" helper="Ex: 1234 5678 9000 0000" />

                <FormSelect items={ cardBrands } placeholder="Selecione a bandeira" id="cardBrand" />

                <FormInput placeholder="Nome no cartão" id="cardName" type="text" />

                <FormInput placeholder="CPF do proprietário" id="cardCpf" type="text" helper="Ex: 123.456.789-10" />

                <FormInput placeholder="Vencimento" id="dueDateCard" type="text" helper="Ex: 11/2022" />

                <FormInput placeholder="Código de segurança" id="securityCodeCard" type="text" helper="Ex: 123" />
            </SimpleGrid>

            <Box textAlign="center">
                <Button type="submit" mt="10" colorScheme="yellow">Confirmar compra</Button>
            </Box>
        </Box>
    )
}

export { PaymentForm }