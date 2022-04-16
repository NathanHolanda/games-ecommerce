import { Select } from "@chakra-ui/react";

interface FormSelectProps{
    items: string[]
    placeholder: string
    id: string
}

function FormSelect({ items, placeholder, id }: FormSelectProps) {
    return (
        <Select focusBorderColor="yellow.700" borderColor="yellow.400" id={ id } required>
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