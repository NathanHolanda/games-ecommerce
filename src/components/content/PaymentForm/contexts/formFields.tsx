import { createContext, ReactNode, useContext } from "react"
import { FormState, UseFormRegister } from "react-hook-form"

interface FormInputs{
    name: string
    email: string
    cpf: string
    cardNumber: string
    cardBrand: string
    cardName: string
    cardCpf: string
    cardDueDate: string
    cardSecurityCode: string
}

interface ReactHookFormProps{
    formState: FormState<FormInputs>
    register: UseFormRegister<FormInputs>
}

interface FormFieldsContextProviderProps{
    value: ReactHookFormProps
    children: ReactNode
}

const Context = createContext<ReactHookFormProps>(
    {} as ReactHookFormProps
)

function FormFieldsContextProvider({ value, children }: FormFieldsContextProviderProps){
    return (
        <Context.Provider value={value}>
            { children }
        </Context.Provider>
    )
}

function useFormFields(){
    const formFields = useContext(Context)

    return formFields
}

export { FormFieldsContextProvider, useFormFields }