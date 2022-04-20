import { useSession } from "next-auth/react"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

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

interface CartStorage{
    products: Product[],
    client: string
}

const Context = createContext<Cart>({} as Cart)

function CartContextProvider({ children }: CartContextProviderProps){
    const [ products, setProducts ] = useState<Product[]>([])
    const { data: session } = useSession()
    const sessionEmail = session?.user?.email || ""

    useEffect(() => {
        if(session){
            const storedProducts = getLocalStorageProducts(sessionEmail)
            if(storedProducts.length > 0) setProducts(storedProducts)
        }
    }, [ session ])

    function getLocalStorageProducts(email: string){
        const cart: CartStorage[] = JSON.parse(
            localStorage.getItem("cart") || "[]"
        )

        const storedProducts = cart.find(
            item => item.client === email
        )?.products || []

        if(storedProducts.length > 0) return storedProducts

        return []
    }

    function setLocalStorageProducts(email: string, products: Product[]){
        const cart: CartStorage[] = JSON.parse(
            localStorage.getItem("cart") || "[]"
        )

        const hasClient = cart.some(
            item => item.client === email
        )
        if( !hasClient ) cart.push({ client: email, products: [] })

        /* const newItem = products.length > 0 ? 
        { client: email, products } : null */

        const newCart = JSON.stringify(
            cart.map(item => {
                if(item.client === email) item.products = products

                return item
            })
        )

        localStorage.setItem("cart", newCart)
    }

    function handleChangeCart(product: Product){
        const isProductInCart = products.some(item => item.id === product.id)

        const newProducts = isProductInCart ? products.map(item => {
            if(item.id === product.id){
                item.quantity = product.quantity
                item.totalPrice = product.quantity * product.price
            }
            return item
        }) : [
            ...products,
            {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                totalPrice: product.quantity * product.price,
                quantity: product.quantity
            }   
        ]

        setProducts(newProducts)
        setLocalStorageProducts(sessionEmail, newProducts)
    }

    function handleRemoveProduct(id: number){
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
            setLocalStorageProducts(sessionEmail, products)

            return
        }
        
        setProducts([])
        setLocalStorageProducts(sessionEmail, [])
    }

    return (
        <Context.Provider value={{
            products,
            handleChangeCart,
            handleRemoveProduct
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