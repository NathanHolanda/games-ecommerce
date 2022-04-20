import {
    Button as ChakraButton,
    ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

type ButtonProps = ChakraButtonProps & {
    isCurrent?: false
    number: number;
    onPageChange: (page: number) => void
} | ChakraButtonProps & {
    isCurrent: boolean;
    number: number;
    onPageChange?: () => void
}

function Button({
    isCurrent = false,
    number,
    onPageChange = () => {} 
}: ButtonProps) {
    if (isCurrent) {
        return (
            <ChakraButton
                borderRadius={5}
                w="6"
                h="8"
                fontWeight="500"
                fontSize="lg"
                color="gray.700"
                disabled
                backgroundColor="yellow.400"
                _hover={{ backgroundColor: "yellow.400" }}
                _disabled={{ cursor: "default" }}
            >
                {number}
            </ChakraButton>
        );
    }

    return (
        <ChakraButton
            borderRadius={5}
            backgroundColor="blue.600"
            _hover={{ backgroundColor: "blue.700" }}
            w="6"
            h="8"
            fontWeight="500"
            fontSize="lg"
            onClick={() => onPageChange(number)}
        >
            {number}
        </ChakraButton>
    );
}

export { Button }