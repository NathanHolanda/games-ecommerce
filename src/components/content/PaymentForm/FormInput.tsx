import { FormControl, FormHelperText, Input } from "@chakra-ui/react"

interface FormInputProps{
    placeholder: string
    id: string
    type: string
    helper?: string
}

function FormInput({ placeholder, id, type, helper = "" } : FormInputProps) {
    return (
        <FormControl>
            <Input placeholder={ placeholder } focusBorderColor="yellow.700" borderColor="yellow.400" id={ id } type={ type } required/>
            { helper ? <FormHelperText fontSize="xs" ml="2">{ helper }</FormHelperText> : "" }
        </FormControl>
    )
}

export { FormInput }