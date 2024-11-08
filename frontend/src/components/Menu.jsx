import { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { menu } from '../apis'

function Menu() {

  const [menus, setMenus] = useState([])

  useEffect(() => {

    async function fetchMenus() {
      const res = await menu.getAll()
      setMenus(res.data)
    }

    fetchMenus()
  }, [])

  return (
    <Paper elevation={6} sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {menus && menus.map(item => {
          return (
            <Grid size={3} key={menus.indexOf(item)}>
              <Card elevation={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", maxHeight: 178 }}
                  image={item.image}
                  title={item.name}
                  alt={item.name}
                />
                <CardContent sx={{ p: 1 }}>
                  <Typography variant='h5'>{item.name}</Typography>
                  <Typography variant='h6'>Rp {item.price.toLocaleString()},00</Typography>
                </CardContent>
                <CardActions>
                <Button variant='contained' size='medium' color='primary'>Add</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Menu
