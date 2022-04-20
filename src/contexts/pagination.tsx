import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface PaginationContextProps{
    onPageChange: (page: number) => void;
    page: number;
}

interface PaginationContextProviderProps{
    children: ReactNode
}

const Context = createContext<PaginationContextProps>({} as PaginationContextProps)

export function PaginationContextProvider({children}: PaginationContextProviderProps){
    const [page, setPage] = useState<number>(1)
    const onPageChange = (page: number) => setPage(page)
    const router = useRouter()

    useEffect(() => setPage(1), [ router.asPath ])

    return(
        <Context.Provider value={{page, onPageChange}}>
            {children}
        </Context.Provider>
    )
}

export function usePagination(){
    const pagination = useContext(Context)

    return pagination
}