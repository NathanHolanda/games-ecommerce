import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

interface ProductToBeRemoved{
    idToBeRemoved: number
    setIdToBeRemoved: Dispatch<SetStateAction<number>>
}

interface ConfirmRemoveProductProviderProps{
    children: ReactNode
}

const Context = createContext<ProductToBeRemoved>(
    {} as ProductToBeRemoved
)

function ConfirmRemoveProductProvider({ children }: ConfirmRemoveProductProviderProps){
    const [ idToBeRemoved, setIdToBeRemoved ] = useState(0)

    return (
        <Context.Provider value={{idToBeRemoved, setIdToBeRemoved}}>
            { children }
        </Context.Provider>
    )
}

function useConfirmRemoveProduct(){
    const product = useContext(Context)

    return product
}

export { ConfirmRemoveProductProvider, useConfirmRemoveProduct }