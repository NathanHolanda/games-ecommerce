import { Select } from "@chakra-ui/react";
import { useRegister } from "./contexts/register";

interface FormSelectProps{
    items: string[]
    placeholder: string
    name: "name" | "email" | "cpf" | "cardNumber" | "cardBrand" | "cardName" | "cardCpf" | "dueDateCard" | "securityCodeCard"
}

function FormSelect({ items, placeholder, name }: FormSelectProps) {
    const { register } = useRegister()

    return (
        <Select
          {...register(name)}
          focusBorderColor="yellow.700"
          borderColor="yellow.400"
          name={name}
          required
        >
            <option value="" selected hidden disabled>{ placeholder }</option>	
            {
                items.map((item, i) => (
                    <option
                        value={ item }
                        style={{ background: "#2D3748" }}
                        key={i}
                    >
                        { item }
                    </option>
                ))
            }
        </Select>
    )
}

export { FormSelect }