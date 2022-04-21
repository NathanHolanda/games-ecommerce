import { Flex, Image } from "@chakra-ui/react"

interface ProductImageProps{
    image: string
    name: string
}

function ProductImage({ image, name }: ProductImageProps) {
    return (
        <Flex justify="center" boxSize="md">
            <Image
                src={image.startsWith("http") ? image : `../${image}`}
                alt={name}
                title={name}
                maxW="200px"
            />
        </Flex>
    )
}

export { ProductImage } 