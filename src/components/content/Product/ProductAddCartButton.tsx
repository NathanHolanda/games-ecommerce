import { Popover, PopoverTrigger, IconButton, PopoverContent, PopoverArrow, PopoverBody, Text, useDisclosure } from "@chakra-ui/react"
import { BsCartPlus } from "react-icons/bs"
import { useCart } from "../../../contexts/useCart"

interface Product{
    id: string
    name: string
    price: number
    image: string
}

interface ProductAddCartButtonProps{
    product: Product
    quantity: number
} 

function ProductAddCartButton({ product, quantity }: ProductAddCartButtonProps) {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { handleChangeCart } = useCart()

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
                    onClick={() => {
                        onOpen()

                        handleChangeCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            quantity,
                        })
                        
                        setTimeout(() => onClose(), 2000)
                    }}
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
                    <Text fontSize="md" fontWeight="500">Adicionado ao carrinho</Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export { ProductAddCartButton }