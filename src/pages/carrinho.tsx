import { Box } from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import { useCart } from "../contexts/useCart"

function Cart(){
    const {products, handleChangeChart} = useCart()
    
    return (
        <Layout>
            <Box></Box>
        </Layout>
    )
}

export default Cart