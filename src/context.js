import React , { useState, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [files, setFiles] = useState([])
    const [currentSelectedFile, setCurrentSelectedFile] = useState(null)
    
    return (
        <AppContext.Provider
        value={{
            user,
            setUser,
            files,
            setFiles,
        }}
        >
        {children}
        </AppContext.Provider>
    )
    }

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }