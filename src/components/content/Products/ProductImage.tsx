import { Flex, Image } from "@chakra-ui/react";

interface ProductImageProps{
    image: string
    name: string
}

function ProductImage({ image, name }: ProductImageProps) {
    return (
        <Flex justify="center">
            <Image
                src={image}
                alt={name}
                title={name}
                maxW={["50px", "70px", "120px", "150px"]}
            />
        </Flex>
    )
}

export { ProductImage }