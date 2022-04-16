import { Box, Text } from "@chakra-ui/react"
import StarRatings from "react-star-ratings"

interface ProductInfoProps{
    name: string
    score: number
    price: string
}

function ProductInfo({ name, score, price }: ProductInfoProps) {
    return (
        <Box mt="4">
            <Text
                fontSize="xl"
                color="yellow.400"
                fontWeight="500"
            >{name}</Text>
            <StarRatings
                rating={score}
                starRatedColor="#c28919"
                starDimension="20px"
                starSpacing="2px"
                numberOfStars={5}
            />
            <Text
                fontSize="md"
                mt="2"
                ml="1"
                color="gray.400"
            >{price}</Text>
        </Box>
    )
}

export { ProductInfo }