import { Box } from '@mui/material'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {
  
  return (
    <Box sx={{ height: "100vh", width: "100vw", display: "flex" }}>
      <Header />
      <Nav />
      <Main />
    </Box>
  )
}

export default App
