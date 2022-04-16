import { createContext, ReactNode, useContext, useState } from "react"

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
    handleChangeCart: (product: Product) => void,
    handleRemoveProduct: (id: number) => void
}

const Context = createContext<Cart>({} as Cart)

function CartContextProvider({ children }: CartContextProviderProps){
    const [ products, setProducts ] = useState<Product[]>([])

    return (
        <Context.Provider value={{
            products,
            handleChangeCart(product: Product){
                const isProductInCart = products.some(item => item.id === product.id)

                if(isProductInCart){
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
            },
            handleRemoveProduct(id: number){
                let arrayId = 0

                const isProductInCart = products.some((product, index) => {
                    if(Number(product.id) === id){
                        arrayId = index
                        return true
                    }

                    return false
                })

                if(isProductInCart && products.length > 1){
                    products.splice(arrayId, 1)

                    setProducts(products)

                    return
                }
                
                setProducts([])
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