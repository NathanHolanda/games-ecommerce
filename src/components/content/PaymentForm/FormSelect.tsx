import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react";
import { useFormFields } from "./contexts/formFields";

interface FormSelectProps{
    items: string[]
    placeholder: string
    name: "name" | "email" | "cpf" | "cardNumber" | "cardBrand" | "cardName" | "cardCpf" | "cardDueDate" | "cardSecurityCode"
}

function FormSelect({ items, placeholder, name }: FormSelectProps) {
    const { register, formState } = useFormFields()
    const error = formState.errors[name]

    return (
        <FormControl>
            <Select
                {...register(name)}
                focusBorderColor="yellow.700"
                borderColor={
                    error ? "red.500" : "yellow.400"
                }
                name={name}
                required
                fontSize={["sm", "md"]}
                color="gray.400"
                onChange={e => {
                    if(e.target.value !== "")
                        e.target.style.color = "#E2E8F0"
                }}
                _hover={{ borderColor: "yellow.400" }}
            >
                <option value="" selected hidden disabled>{ placeholder }</option>	
                {
                    items.map((item, i) => (
                        <option
                            value={ item }
                            style={{ background: "#2D3748", color: "#E2E8F0"}}
                            key={i}
                        >
                            { item }
                        </option>
                    ))
                }
            </Select>
            { error && <FormErrorMessage>{ error.message }</FormErrorMessage> }
        </FormControl>
    )
}

export { FormSelect }