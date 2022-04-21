import { createContext, ReactNode, useContext } from "react"
import { UseFormRegister } from "react-hook-form"

interface FormInputs{
    name: string
    email: string
    cpf: string
    cardNumber: string
    cardBrand: string
    cardName: string
    cardCpf: string
    dueDateCard: string
    securityCodeCard: string
}

interface RegisterContextProviderProps{
    register: UseFormRegister<FormInputs>
    children: ReactNode
}

const Context = createContext<UseFormRegister<FormInputs>>(
    {} as UseFormRegister<FormInputs>
)

function RegisterContextProvider({ register, children }: RegisterContextProviderProps){
    return (
        <Context.Provider value={register}>
            { children }
        </Context.Provider>
    )
}

function useRegister(){
    const register = useContext(Context)

    return { register }
}

export { RegisterContextProvider, useRegister }