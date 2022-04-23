import { Box, Text, useBreakpointValue } from "@chakra-ui/react"
import StarRatings from "react-star-ratings"

interface ProductInfoProps{
    name: string
    score: number
    price: string
}

function ProductInfo({ name, score, price }: ProductInfoProps) {
    const starDimension = useBreakpointValue({base: "8px", sm: "10px", md: "15px", lg: "20px"})
    const starSpacing = useBreakpointValue({base: "1px", md: "1px", lg: "2px"})


    return (
        <Box mt={["2", "3", "4"]}>
            <Text
                fontSize={["xs", "sd", "md", "xl"]}
                color="yellow.400"
                fontWeight="500"
                whiteSpace={["nowrap", "normal"]}
                overflow={["hidden", "visible"]}
                textOverflow={["ellipsis", "none"]}
                maxWidth={["60px", "none"]}
            >{name}</Text>
            <StarRatings
                rating={score}
                starRatedColor="#c28919"
                starDimension={starDimension}
                starSpacing={starSpacing}
                numberOfStars={5}
            />
            <Text
                fontSize={["xs", "xs", "sm", "md"]}
                mt={["0", "0", "2"]}
                ml={["0", "0", "1"]}
                color="gray.400"
            >{price}</Text>
        </Box>
    )
}

export { ProductInfo }