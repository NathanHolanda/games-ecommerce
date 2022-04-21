import { FormControl, FormHelperText, Input } from "@chakra-ui/react"
import { useRegister } from "./contexts/register"

interface FormInputProps{
    placeholder: string
    name: "name" | "email" | "cpf" | "cardNumber" | "cardBrand" | "cardName" | "cardCpf" | "dueDateCard" | "securityCodeCard"
    type: string
    helper?: string
}

function FormInput({ placeholder, name, type, helper = "" } : FormInputProps) {
    const { register } = useRegister()

    return (
        <FormControl>
            <Input
              {...register(name)}
              placeholder={ placeholder }
              focusBorderColor="yellow.700"
              borderColor="yellow.400"
              name={ name }
              type={ type }
              required
            />
            { helper ? <FormHelperText fontSize="xs" ml="2">{ helper }</FormHelperText> : "" }
        </FormControl>
    )
}

export { FormInput }