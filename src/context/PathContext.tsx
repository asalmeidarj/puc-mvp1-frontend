import { createContext } from 'react'

type PathContextData = {
    path: string;
    //handleToggleMenu: () => void;
}

export const PathContext = createContext({} as PathContextData)