import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react"
import { MaskElement } from "imask"
import { IMaskMixin } from "react-imask"
import { ReactMixinComponent } from "react-imask/dist/mixin"
import { useFormFields } from "./contexts/formFields"

interface FormInputProps{
    placeholder: string
    name: "name" | "email" | "cpf" | "cardNumber" | "cardBrand" | "cardName" | "cardCpf" | "cardDueDate" | "cardSecurityCode"
    type: string
}

function FormInput({ placeholder, name, type } : FormInputProps) {
    const { register, formState } = useFormFields()
    const error = formState.errors[name]

    return (
        <FormControl isInvalid={!!error}>
            <Input
              {...register(name)}
              placeholder={ placeholder }
              required
              name={ name }
              type={ type }
              focusBorderColor="yellow.700"
              borderColor={
                error ? "red.500" : "yellow.400"
              }
            />
            { error && <FormErrorMessage>{ error.message }</FormErrorMessage> }
        </FormControl>
    )
}

export { FormInput }