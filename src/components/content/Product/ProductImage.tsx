import { Flex, Image } from "@chakra-ui/react"

interface ProductImageProps{
    image: string
    name: string
}

function ProductImage({ image, name }: ProductImageProps) {
    const src = image.startsWith("http") ? image : `../${image}`

    return (
        <Flex justify="center" boxSize="md">
            <Image
                src={src}
                alt={name}
                title={name}
                maxW="200px"
            />
        </Flex>
    )
}

export { ProductImage } 