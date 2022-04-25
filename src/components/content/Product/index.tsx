import { Flex, Box, Text } from "@chakra-ui/react";
import { useState } from "react"
import { ProductAddToCartButton } from "./ProductAddToCartButton"
import { ProductImage } from "./ProductImage"
import { ProductInfo } from "./ProductInfo"
import { ProductQuantityInput } from "./ProductQuantityInput"

interface Product{
    id: string,
    name: string,
    price: number,
    score: number,
    image: string
}

interface ProductProps{
    product: Product
}

function Product({ product }: ProductProps){
    const [ quantity, setQuantity ] = useState<number>(1)

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            backgroundColor="gray.800"
            m="0 auto"
            py={["2", "6"]}
            px="2"
            boxSize={["md", "lg"]}
            borderRadius={[3,5]}
            transition="transform 0.2s"
            w={[250, 350]}
            maxH={[400, 600]}
        >
                <ProductImage name={product.name} image={product.image}/>

                <Box mt="4">
                    <Text
                        fontSize={["md", "lg", "xl"]}
                        color="yellow.400"
                        fontWeight="500"
                    >{product.name}</Text>

                    <Flex align="center" justify="space-between">
                        <ProductInfo score={product.score} price={product.price} quantity={quantity} />

                        <ProductQuantityInput quantity={quantity} setQuantity={setQuantity} />
                    </Flex>

                    <ProductAddToCartButton product={product} quantity={quantity} />
                </Box>
        </Flex>
    )
}

export { Product }