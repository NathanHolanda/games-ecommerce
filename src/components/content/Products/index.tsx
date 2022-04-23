import { Flex, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";

interface Product{
    id: string,
    name: string,
    price: number,
    score: number,
    image: string
}

interface ProductsProps{
    products: Product[]
}

function Products({ products }: ProductsProps) {
    return (
        <SimpleGrid
            columns={4}
            spacing={[2, 4, 6, 8]}
        >
        {     
            products.map(product => {
                const score = Math.ceil((product.score * 5) / 400)
                const price = Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(product.price)

                return (
                    <Link href={`/produtos/${product.id}`}>
                        <Flex
                            direction="column"
                            align="center"
                            backgroundColor="gray.800"
                            py="4"
                            px="4"
                            maxH={500}
                            borderRadius={[3, 4, 4, 5]}
                            cursor="pointer"
                            transition="transform 0.2s"
                            _hover={{
                                transform: "scale(1.1, 1.1)"
                            }}
                            key={product.id}
                        >
                            <ProductImage image={product.image} name="product"/>

                            <ProductInfo name={product.name} score={score} price={price} />
                        </Flex>
                    </Link>
                )
            }) 
        }
        </SimpleGrid>
    )
}

export { Products }