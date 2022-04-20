import { Button } from "./Button"
import { Text } from "@chakra-ui/react"
import { usePagination } from "../../../../contexts/pagination"

type CurrentPageSiblingsProps = {
    type: "left"
    currentPage: number
    quantity: number
} | {
    type: "right"
    currentPage: number
    quantity: number
    lastPage: number
}

function getEmptyArray(size: number){
    return [...Array(size)]
}

function CurrentPageSiblings(props: CurrentPageSiblingsProps){
    const {onPageChange} = usePagination()
    const { type, quantity, currentPage} = props

    if(type === "left"){
        for(let newQuantity = quantity; newQuantity >= 1; newQuantity--){
            const firstSibling = currentPage - newQuantity

            if(firstSibling >= 2){
                const emptyArray = getEmptyArray(newQuantity)
                const hasInterval = currentPage - newQuantity > 2

                return (
                    <>
                        { hasInterval ? <Text w="8" textAlign="center">...</Text> : "" }

                        { emptyArray.map((_, i) => {
                            return <Button number={currentPage - (i + 1)} onPageChange={onPageChange} />
                        }).reverse() }
                    </>
                )
            }
        }
    }else if(type === "right"){
        const { lastPage } = props

        for(let newQuantity = quantity; newQuantity >= 1; newQuantity--){
            const lastSibling = currentPage + newQuantity
    
            if(lastSibling <= lastPage - 1){
                const emptyArray = getEmptyArray(newQuantity)
                const hasInterval = currentPage + newQuantity < lastPage - 1
    
                return (
                    <>
                        { emptyArray.map((_, i) => {
                            return <Button number={currentPage + (i + 1)} onPageChange={onPageChange} />
                        }) }
    
                        { hasInterval ? <Text w="8" textAlign="center">...</Text> : "" }
                    </>
                )
            }
        }
    }

    return <></>
}

export { CurrentPageSiblings }