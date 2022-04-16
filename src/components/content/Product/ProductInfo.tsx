import { Box, Text } from "@chakra-ui/react"
import StarRatings from "react-star-ratings"

interface ProductInfoProps{
    score: number
    price: number
    quantity: number
}

function ProductInfo({ score, price, quantity }: ProductInfoProps) {
    const rating = Math.ceil((score * 5) / 400)
    const total = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(price * quantity)

    return (
        <Box mr="4">
            <StarRatings
                rating={ rating }
                starRatedColor="#c28919"
                starDimension="20px"
                changeRating={value => {}}
                starHoverColor="#3182CE"
                starSpacing="2px"
                numberOfStars={5}
            />
            <Text
                fontSize="md"
                ml="1"
                mt="2"
                textAlign="left"
                color="gray.400"
            >{ total }</Text>
        </Box>
    )
}

export { ProductInfo }