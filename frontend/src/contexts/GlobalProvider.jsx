import { createContext, useState } from 'react'
import PropTypes from "prop-types"

const GlobalContext = createContext(null)

function GlobalProvider(props) {

    const [orders, setOrders] = useState({
        name: "Customer",
        carts: [
            {
                id: 1,
                quantity: 2,
            }
        ],
    })

    GlobalProvider.propTypes = { children: PropTypes.string }
    
    return (
        <GlobalContext.Provider
            value={{
                orders,
                setOrders,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }
