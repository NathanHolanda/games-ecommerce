import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { FormInput } from "./FormInput"
import { FormSelect } from "./FormSelect"
import { useForm, SubmitHandler } from "react-hook-form"
import { RegisterContextProvider } from "./contexts/register";

interface FormInputs{
    name: string
    email: string
    cpf: string
    cardNumber: string
    cardBrand: string
    cardName: string
    cardCpf: string
    dueDateCard: string
    securityCodeCard: string
}

function PaymentForm(){
    const cardBrands = ["Visa", "MasterCard", "JCB", "Diners", "Amex", "Elo", "Aura"]

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>()
    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

    return (
        <RegisterContextProvider register={register}>
            <Box as="form" w="100%" onSubmit={handleSubmit(onSubmit)}>
                <Text fontSize="2xl" fontWeight="500" mb="2">Dados do cliente</Text>
                <SimpleGrid mb="6" columns={3} spacing="5">
                    <FormInput placeholder="Nome completo" name="name" type="text" />
                    
                    <FormInput placeholder="E-mail" name="email" type="email" />

                    <FormInput placeholder="CPF" name="cpf" type="text" helper="Ex: 123.456.789-10" />
                </SimpleGrid>

                <Text fontSize="2xl" fontWeight="500" mb="2">Dados do pagamento</Text>
                <SimpleGrid columns={3} spacing="5">
                    <FormInput placeholder="Número do cartão" name="cardNumber" type="text" helper="Ex: 1234 5678 9000 0000" />

                    <FormSelect items={ cardBrands } placeholder="Selecione a bandeira" name="cardBrand" />

                    <FormInput placeholder="Nome no cartão" name="cardName" type="text" />

                    <FormInput placeholder="CPF do proprietário" name="cardCpf" type="text" helper="Ex: 123.456.789-10" />

                    <FormInput placeholder="Vencimento" name="dueDateCard" type="text" helper="Ex: 11/2022" />

                    <FormInput placeholder="Código de segurança" name="securityCodeCard" type="text" helper="Ex: 123" />
                </SimpleGrid>

                <Box textAlign="center">
                    <Button type="submit" mt="10" colorScheme="yellow">Confirmar compra</Button>
                </Box>
            </Box>
        </RegisterContextProvider>
    )
}

export { PaymentForm }