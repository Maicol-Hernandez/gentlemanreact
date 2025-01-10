import { createContext, Dispatch, SetStateAction, useContext, } from "react";

interface GlobalContextType {
    value: number | null,
    setValue: Dispatch<SetStateAction<number>>
}

export const GlobalContext = createContext<GlobalContextType>({
    value: null,
    setValue: () => { }
})

export const useGlobalContext = () => {
    const contex = useContext(GlobalContext);

    if (!contex.value && contex.value !== 0) {
        throw new Error('useGlobalContext must be used within a GlobalProvider')
    }

    return contex
}