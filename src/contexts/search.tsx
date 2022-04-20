import { createContext, ReactNode, useContext, useState } from "react";

interface SearchBox{
    searched: string
    handleSearchedChange: (value: string) => void
}

interface SearchContextProvider{
    children: ReactNode
}

const Context = createContext<SearchBox>({} as SearchBox)

function SearchContextProvider({ children }: SearchContextProvider){
    const [ searched, setSearched ] = useState<string>("")

    return (
        <Context.Provider value={{
            searched,
            handleSearchedChange(value: string){
                setSearched(value)
            }
        }}>
            { children }
        </Context.Provider>
    )
}

function useSearch(){
    const search = useContext(Context)

    return search
}

export { SearchContextProvider, useSearch }