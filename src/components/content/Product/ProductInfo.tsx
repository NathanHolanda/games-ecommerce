import { Box, Text, useBreakpointValue } from "@chakra-ui/react"
import { useState } from "react"
import StarRatings from "react-star-ratings"

interface ProductInfoProps{
    score: number
    price: number
    quantity: number
}

function ProductInfo({ score, price, quantity }: ProductInfoProps) {
    const starDimension = useBreakpointValue({base: "15px", md: "20px"})
    const starSpacing = useBreakpointValue({base: "1px", md: "2px"})
    const initialRating = Math.ceil((score * 5) / 400)
    const [ rating, setRating ] = useState<number>(initialRating)
    const total = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(price * quantity)

    return (
        <Box mr="4">
            <StarRatings
                rating={ rating }
                starRatedColor="#c28919"
                starDimension={starDimension}
                changeRating={value => {setRating(value)}}
                starHoverColor="#3182CE"
                starSpacing="2px"
                numberOfStars={5}
            />
            <Text
                fontSize={["sm", "md"]}
                ml="1"
                mt="2"
                textAlign="left"
                color="gray.400"
            >{ total }</Text>
        </Box>
    )
}

export { ProductInfo }