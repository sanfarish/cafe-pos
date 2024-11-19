import { createContext, useContext, useState } from 'react'
import PropTypes from "prop-types"

const DataContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useData() {
    const context = useContext(DataContext)
    if (!context) throw new Error("useData must be within a DataProvider")
    return context
}

export function DataProvider({ children }) {

    const [categories, setCategories] = useState([])
    const [menus, setMenus] = useState([])
    const [payments, setPayments] = useState([])

    DataProvider.propTypes = { children: PropTypes.any }
    
    return (
        <DataContext.Provider
            value={{
                categories,
                setCategories,
                menus,
                setMenus,
                payments,
                setPayments,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
