import { createContext } from 'react'

type UserContextData = {
    name: string;
    email: string;
    //handleToggleMenu: () => void;
}

export const UserContext = createContext({} as UserContextData)