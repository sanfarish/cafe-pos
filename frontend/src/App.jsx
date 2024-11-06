import { Box } from '@mui/material'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {
  
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Nav />
      <Main />
    </Box>
  )
}

export default App
