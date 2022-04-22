import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";
import { useCart } from "../../contexts/cart";

function Cart(){
    const { products } = useCart()

    return (
        <Link href="/carrinho">
            <Button colorScheme="transparent" w={["30px", "60px"]}>
                <Box position="relative">
                    { products.length > 0 ?
                        <Box
                            borderRadius="50%"
                            position="absolute"
                            right={["0", "-1"]}
                            top={["0.5", "0"]}
                            width={["4", "5"]}
                            height={["4", "5"]}
                            fontWeight="400"
                            fontSize={["xs", "sm"]}
                            textAlign="center"
                            background="blue.600"
                            zIndex={2}
                        >
                            <Text lineHeight={["4", "5"]}>{ products.length }</Text>
                        </Box> : ""
                    }
                    <IconButton
                        fontSize={["3xl", "4xl"]}
                        mt={["0", "1"]}
                        icon={<BiCartAlt/>}
                        aria-label="Carrinho de compras"
                        colorScheme="transparent"
                        color="yellow.400"
                    />
                </Box>
            </Button>
        </Link>
    )
}

export { Cart }