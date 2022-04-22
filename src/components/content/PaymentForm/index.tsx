import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { FormInput } from "./FormInput"
import { FormSelect } from "./FormSelect"
import { useForm, SubmitHandler } from "react-hook-form"
import { FormFieldsContextProvider } from "./contexts/formFields";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from "next/router";
import { useCart } from "../../../contexts/cart";
import { useSession } from "next-auth/react";

interface FormInputs{
    name: string
    email: string
    cpf: string
    cardNumber: string
    cardBrand: string
    cardName: string
    cardCpf: string
    cardDueDate: string
    cardSecurityCode: string
}

function PaymentForm(){
    const { push } = useRouter()
    const { data: session } = useSession()
    const { handleClearCart } = useCart()

    const cardBrands = ["Visa", "MasterCard", "JCB", "Diners", "Amex", "Elo", "Aura"]

    const yupSchema = yup.object({
        name: yup.string().min(5, "Mínimo 5 caracteres").required("Nome obrigatório"),
        email: yup.string().min(6, "Mínimo 6 caracteres").email().required("E-mail obrigatório"),
        cpf: yup.string().matches(/[1-9]\d{2}\.\d{3}\.\d{3}-\d{2}/, "CPF inválido").required("CPF obrigatório"),
        cardNumber: yup.string().matches(/[1-9]\d{3} (\d{4} ){2}\d{4}/, "Número de cartão inválido").required("Número de cartão obrigatório"),
        cardBrand: yup.string().required("Bandeira do cartão obrigatória"),
        cardName: yup.string().min(5, "Mínimo 5 caracteres").required("Nome do proprietário do cartão obrigatório"),
        cardCpf: yup.string().matches(/[1-9]\d{2}\.\d{3}\.\d{3}-\d{2}/, "CPF inválido").required("CPF do proprietário do cartão obrigatório"),
        cardDueDate: yup.string().matches(/(0\d|1[0-2])\/20(2[2-9]|[3-9]\d)/, "Data de vencimento do cartão inválida").required("Data de vencimento do cartão obrigatória"),
        cardSecurityCode: yup.string().matches(/\d{3}/, "Código de segurança do cartão inválido").required("Código de segurança do cartão obrigatório")
    }).required()
    const { register, handleSubmit, formState } = useForm<FormInputs>({
        resolver: yupResolver(yupSchema)
    })
    
    const onSubmit: SubmitHandler<FormInputs> = data => {
        const email = session?.user?.email || ""
        handleClearCart(email)

        console.log(data)

        push("/?success=1")
    }

    return (
        <FormFieldsContextProvider value={{register, formState}}>
            <Box as="form" w="100%" onSubmit={handleSubmit(onSubmit)}>
                <Text fontSize="2xl" fontWeight="500" mb="2">Dados do cliente</Text>
                <SimpleGrid mb="10" columns={3} spacing="5">
                    <FormInput placeholder="Nome completo" name="name" type="text" />
                    
                    <FormInput placeholder="E-mail" name="email" type="email" />

                    <FormInput placeholder="CPF" name="cpf" type="text" />
                </SimpleGrid>

                <Text fontSize="2xl" fontWeight="500" mb="2">Dados do pagamento</Text>
                <SimpleGrid columns={3} spacing="5">
                    <FormInput placeholder="Número do cartão" name="cardNumber" type="text" />

                    <FormSelect items={ cardBrands } placeholder="Selecione a bandeira" name="cardBrand" />

                    <FormInput placeholder="Nome no cartão" name="cardName" type="text" />

                    <FormInput placeholder="CPF do proprietário" name="cardCpf" type="text" />

                    <FormInput placeholder="Vencimento" name="cardDueDate" type="text" />

                    <FormInput placeholder="Código de segurança" name="cardSecurityCode" type="text" />
                </SimpleGrid>

                <Box textAlign="center">
                    <Button type="submit" mt="10" colorScheme="yellow">Confirmar compra</Button>
                </Box>
            </Box>
        </FormFieldsContextProvider>
    )
}

export { PaymentForm }