import { Box } from '@mui/material'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import { DataProvider } from './contexts/DataProvider'
import { OrderProvider } from './contexts/OrderContext'

export default function App() {
  
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
