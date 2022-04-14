import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

interface Product{
    id: string
    name: string
    image: string
    price: number
    quantity: number
    totalPrice?: number
}

interface CartContextProviderProps{
    children: ReactNode
}

interface Cart{
    products: Product[],
    handleChangeChart: (product: Product) => void
}

const Context = createContext<Cart>({} as Cart)

function CartContextProvider({ children }: CartContextProviderProps){
    const [ products, setProducts ] = useState<Product[]>([])

    return (
        <Context.Provider value={{
            products,
            handleChangeChart(product: Product){
                const isProductOnCart = products.some(item => item.id === product.id)

                if(isProductOnCart){
                    const newProducts = products.map(item => {
                        if(item.id === product.id){
                            item.quantity = product.quantity
                            item.totalPrice = product.quantity * product.price
                        }
                        return item
                    })

                    setProducts(newProducts)
                }else
                    setProducts([
                        ...products,
                        {
                            id: product.id,
                            name: product.name,
                            image: product.image,
                            price: product.price,
                            totalPrice: product.quantity * product.price,
                            quantity: product.quantity
                        }   
                    ])
            }
        }}>
            { children }
        </Context.Provider>
    )
}

function useCart(){
    const cart = useContext(Context)

    return cart
}

export { CartContextProvider, useCart }