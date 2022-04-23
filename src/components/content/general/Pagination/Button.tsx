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
                borderRadius={[2, 3]}
                h={["2", "6", "6", "8"]}
                w={["5", "6", "6", "8"]}
                py="2.5"
                px={["1", "3", "3.5", "4.5"]}
                minW={["initial", "initial", "2.5"]}
                fontWeight="500"
                fontSize={["xs", "sm", "md", "lg"]}
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
            borderRadius={[2, 3]}
            h={["2", "6", "6", "8"]}
            w={["5", "6", "6", "8"]}
            py="2.5"
            px={["1", "3", "3.5", "4.5"]}
            minW={["initial", "initial", "2.5"]}
            backgroundColor="blue.600"
            _hover={{ backgroundColor: "blue.700" }}
            fontWeight="500"
            fontSize={["xs", "sm", "md", "lg"]}
            onClick={() => onPageChange(number)}
        >
            {number}
        </ChakraButton>
    );
}

export { Button }