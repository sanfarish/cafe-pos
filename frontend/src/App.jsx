import { Box } from '@mui/material'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import { DataProvider } from './contexts/DataProvider'
import { OrderProvider } from './contexts/OrderContext'
import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
    const clientKey = import.meta.env.VITE_CLIENT_KEY
    const script = document.createElement('script')
    script.src = snapScript
    script.setAttribute("data-client-key", clientKey)
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  
  return (
    <Box sx={{ height: "100vh", width: "100vw", display: "flex" }}>
      <Header />
      <DataProvider>
        <OrderProvider>
          <Nav />
          <Main />
        </OrderProvider>
      </DataProvider>
    </Box>
  )
}
