import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useFormFields } from "./contexts/formFields"
import { maskInput } from "./libs/mask"

interface FormInputProps{
    placeholder: string
    name: "name" | "email" | "cpf" | "cardNumber" | "cardBrand" | "cardName" | "cardCpf" | "cardDueDate" | "cardSecurityCode"
    type: string
}

function FormInput({ placeholder, name, type } : FormInputProps) {
    const { register, formState } = useFormFields()
    const error = formState.errors[name]
    const [ value, setValue ] = useState("")
    const nonMasked = [ "name", "email", "cardName" ]
    const isNonMasked = nonMasked.includes(name)

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
              _hover={{ borderColor: "yellow.400" }}
              value={ value }
              onChange={
                isNonMasked ?
                e => {
                  setValue(e.target.value)
                } :
                e => {
                  const input = e.target.value
                  const diffSize = value.length - input.length

                  if(diffSize >= 1) {
                    const valueArr = value.split("")
                    valueArr.splice(-diffSize, diffSize)

                    setValue(valueArr.join(""))
                  }

                  if(
                    diffSize <= -2 ||
                    (diffSize === 0 && value !== input)
                  ){
                    console.log(input)
                    const text = maskInput(name, input)
                    setValue(text)
                  }
                }
              }
              onKeyDown={
                isNonMasked ?
                () => {} :
                e => {
                  const typed = e.key
                  const text = value + typed
                  
                  const input = maskInput(name, text)
                  setValue(input)
                }
              }
              fontSize={["sm", "md"]}
            />
            { error && <FormErrorMessage>{ error.message }</FormErrorMessage> }
        </FormControl>
    )
}

export { FormInput }