import { Modal, ModalOverlay, ModalContent, ModalHeader, IconButton, ModalBody, ModalFooter, Text } from "@chakra-ui/react";
import { BsX } from "react-icons/bs";
import { TiTickOutline, TiCancelOutline } from "react-icons/ti";
import { useCart } from "../../../contexts/cart";
import { useConfirmRemoveProduct } from "../../../contexts/confirmRemoveProduct";

interface ConfirmRemoveProductModalProps{
    isOpen: boolean
    onClose: () => void
}

function ConfirmRemoveProductModal({ isOpen, onClose }: ConfirmRemoveProductModalProps){
    const { handleRemoveProduct } = useCart()
    const { idToBeRemoved, setIdToBeRemoved } = useConfirmRemoveProduct()

    return (
        <Modal autoFocus={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                backgroundColor="gray.700"
                top="30%"
                mx="2"
            >
                <ModalHeader mb="4">
                    <IconButton
                        icon={<BsX
                        />}
                        colorScheme="transparent"
                        aria-label="Fechar janela"
                        fontSize="3xl"
                        pl="1"
                        display="block"
                        marginLeft="auto"
                        onClick={onClose}
                    ></IconButton>
                </ModalHeader>

                <ModalBody fontSize={["lg","xl"]} mb="4">
                    <Text>Você quer realmente excluir este produto do seu carrinho?</Text>
                </ModalBody>

                <ModalFooter>
                    <IconButton
                        colorScheme="green"
                        color="gray.200"
                        mr={3}
                        onClick={() => {
                            handleRemoveProduct(idToBeRemoved)
                            onClose()
                        }} 
                        icon={<TiTickOutline/>}
                        fontSize="3xl"
                        aria-label="Confirmar exclusão do produto no carrinho"
                    />
                    <IconButton
                        colorScheme="red"
                        onClick={() => {
                            setIdToBeRemoved(0)
                            onClose()
                        }}
                        icon={<TiCancelOutline/>}
                        fontSize="3xl"
                        aria-label="Cancelar exclusão do produto no carrinho"
                    />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export { ConfirmRemoveProductModal }