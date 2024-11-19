import { createContext, useContext, useState } from 'react'
// import PropTypes from "prop-types"

const OrderContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useOrder() {
    const context = useContext(OrderContext)
    if (!context) throw new Error("useOrder must be within a OrderProvider")
    return context
}

// eslint-disable-next-line react/prop-types
export function OrderProvider({ children }) {

    const [order, setOrder] = useState({
        name: "",
        payment: null,
        cart: []
    })

    // OrderProvider.propTypes = { children: PropTypes.string }
    
    return (
        <OrderContext.Provider
            value={{
                order,
                setOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}
