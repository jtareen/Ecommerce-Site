import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [value, setValue] = useState('jawad')
 
    return <GlobalContext.Provider value={{value , setValue}}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext