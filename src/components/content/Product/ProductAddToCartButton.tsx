import { Popover, PopoverTrigger, IconButton, PopoverContent, PopoverArrow, PopoverBody, Text, useDisclosure } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import { BsCartPlus } from "react-icons/bs"
import { useCart } from "../../../contexts/cart"

interface Product{
    id: string
    name: string
    price: number
    image: string
}

interface ProductAddToCartButtonProps{
    product: Product
    quantity: number
} 

function ProductAddToCartButton({ product, quantity }: ProductAddToCartButtonProps) {
    const { status } = useSession()

    const { isOpen, onClose, onOpen } = useDisclosure()
    const { handleChangeCart } = useCart()
    const addToCart = () => {
        onOpen()

        if(status === "authenticated")
            handleChangeCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity,
            })
        
        setTimeout(() => onClose(), 2000)
    }

    return (
        <Popover
            isOpen={isOpen}
            onClose={onClose}
            placement="right"
            autoFocus={false}
            arrowShadowColor="gray.700"
            arrowSize={12}
        >
            <PopoverTrigger>
                <IconButton
                    colorScheme="yellow"
                    aria-label="Adicionar ao carrinho"
                    fontSize="4xl"
                    mt="6"
                    p="6"
                    icon={<BsCartPlus/>}
                    onClick={ addToCart }
                />
            </PopoverTrigger>
            <PopoverContent
                bg="gray.600"
                color="gray.200"
                w={120}
                ml="1"
                borderRadius={10}
                borderColor="gray.600"
            >
                <PopoverArrow bg="gray.600"/>
                <PopoverBody p="2">
                    <Text fontSize="md" fontWeight="500">{
                        status === "authenticated" ?
                        "Adicionado ao carrinho" :
                        "Faça login para comprar"
                    }</Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export { ProductAddToCartButton }