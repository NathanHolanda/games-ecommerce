import { useQuery } from "react-query"
import { api } from "../services/api"

interface Product{
    id: string,
    name: string,
    price: number,
    score: number,
    image: string
}

interface GetProductsProps{
    url: string
}

async function getProducts({ url }: GetProductsProps){
    const response = await api.get(url)

    const total = Number(response.headers["x-count-products"])

    const products: Product[] = response.data.products
    return { total, products }
}

function useProducts(url: string, page: number){
    const query = useQuery(
        ["products", page],
        () => getProducts({url})
    )

    return query
}

export { useProducts }

