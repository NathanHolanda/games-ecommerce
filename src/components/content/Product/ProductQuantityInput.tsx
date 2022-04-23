import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, useBreakpointValue } from "@chakra-ui/react"
import { SetStateAction } from "react"

interface ProductQuantityInputProps{
    quantity: number
    setQuantity: (value: SetStateAction<number>) => void
}

function ProductQuantityInput({ quantity, setQuantity }: ProductQuantityInputProps) {
    const inputSize = useBreakpointValue({base: "xs", md: "xs"})

    return (
        <NumberInput
            size={inputSize}
            maxW={[14,16]}
            defaultValue={1}
            fontSize={["xs", "md"]}
            min={1}
            value={quantity}
            onChange={value => setQuantity(Number(value))}
        >
            <NumberInputField
                backgroundColor="gray.600"
                color="gray.200"
                borderColor="gray.500"
                h={["24px","32px"]}
            />
            <NumberInputStepper borderColor="gray.500" color="gray.200">
                <NumberIncrementStepper
                    bg="green.800"
                    _active={{ bg: "green.800" }}
                    children="+"
                    fontSize="md"
                    h={["8px", 15]}
                    borderColor="gray.500"
                />
                <NumberDecrementStepper
                    bg="red.800"
                    _active={{ bg: "red.800" }}
                    children="-"
                    fontSize="md"
                    h={["8px", 15]}
                    borderColor="gray.500"
                />
            </NumberInputStepper>
        </NumberInput>
    )
}

export { ProductQuantityInput }