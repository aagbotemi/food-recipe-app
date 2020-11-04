import React, { useState, useContext } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true)
    }
    const closePopup = () => {
        setIsPopupOpen(false)
    }

    return (
        <AppContext.Provider
            value={{
                isPopupOpen,
                openPopup,
                closePopup,
            }}
        >
        {children}
        </AppContext.Provider>
    )
}
    
//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}