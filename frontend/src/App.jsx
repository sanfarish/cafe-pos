import { useEffect, useState } from 'react'
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import { getMenus } from './apis/menus'

function App() {

  const [menus, setMenus] = useState([])

  useEffect(() => {

    async function fetchMenus() {
      const data = await getMenus()
      setMenus(data)
    }

    fetchMenus()
  }, [])
  
  return (
    <Container>
      <Typography
        variant='h1'
        sx={{ my: 4, textAlign: "center", color: "primary.main"}}
      >
        Menu
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: 320, md: 672, lg: 1024 },
            pt: 4,
            pb: 4,
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {menus && menus.map((menu) => {
            return (
              <Paper elevation={3} sx={{ width: 320, textAlign: "center" }} key={menus.indexOf(menu)}>
                <Box
                  sx={{
                    m: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant='h2'>{menu.name}</Typography>
                  <Box
                    component="img"
                    sx={{
                      mt: 2,
                      maxWidth: 200,
                      maxHeight: 200,
                    }}
                    alt='samples'
                    src={menu.image}
                  />
                  <Typography
                    variant='h3'
                    sx={{ mt: 2 }}
                  >
                    Rp {menu.price.toLocaleString()},00
                  </Typography>
                  <Button variant='contained' color='secondary' sx={{ mt: 2 }}>
                    Add
                  </Button>
                </Box>
              </Paper>
            )
          })}
        </Box>
      </Box>
    </Container>
  )
}

export default App
