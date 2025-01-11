import { createContext, useContext, useState } from 'react'
import PropTypes from "prop-types"

const OrderContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useOrder() {
    const context = useContext(OrderContext)
    if (!context) throw new Error("useOrder must be within a OrderProvider")
    return context
}

export function OrderProvider({ children }) {

    const [activeCategory, setActiveCategory] = useState(null)
    const [order, setOrder] = useState({
        name: "",
        payment: null,
        cart: [],
        total: 0
    })
    const [focus, setFocus] = useState(false)

    OrderProvider.propTypes = { children: PropTypes.any }
    
    return (
        <OrderContext.Provider
            value={{
                activeCategory,
                setActiveCategory,
                order,
                setOrder,
                focus,
                setFocus,
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}
