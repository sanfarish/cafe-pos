import { useEffect, useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { menu } from './apis'

function App() {

  const [menus, setMenus] = useState([])

  useEffect(() => {

    async function fetchMenus() {
      const data = await menu.getAll()
      setMenus(data)
    }

    fetchMenus()
  }, [])
  
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Paper elevation={4} sx={{ display: "flex", justifyContent: "center" }} square>
          <Typography variant='h1' color='primary'>Menu</Typography>
        </Paper>
      </Grid>
      <Grid size={1}>
        <Grid container spacing={2} sx={{ m: 1 }}>
          <Grid size={12}>
            <Paper elevation={2} square>Category</Paper>
          </Grid>
          <Grid size={12}>
            <Paper elevation={2}>Category</Paper>
          </Grid>
          <Grid size={12}>
            <Paper elevation={2}>Category</Paper>
          </Grid>
          <Grid size={12}>
            <Paper elevation={2}>Category</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={7}>
        <Grid container spacing={2} sx={{ m: 1 }}>
          {menus && menus.map(item => {
            return (
              <Grid size={3} key={menus.indexOf(item)}>
                <Paper elevation={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      maxHeight: 183,
                      borderTopRightRadius: "inherit",
                      borderTopLeftRadius: "inherit",
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    alt="menu image"
                    src={item.image}
                  />
                  <Typography variant='h4'>{item.name}</Typography>
                  <Typography variant='h5'>Rp {item.price.toLocaleString()},00</Typography>
                  <Button variant='contained' color='primary'>Add</Button>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <Grid size={4}>
        <Grid container spacing={2} sx={{ m: 1 }}>
          <Grid size={12}>
            <Paper elevation={2}>Order List</Paper>
          </Grid>
          <Grid size={12}>
            <Paper elevation={2}>Subtotal, Tax, Total, Add Order</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // <Container>
    //   <Typography
    //     variant='h1'
    //     sx={{ my: 4, textAlign: "center", color: "primary.main"}}
    //   >
    //     Menu
    //   </Typography>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         width: { xs: 320, md: 672, lg: 1024 },
    //         pt: 4,
    //         pb: 4,
    //         display: "flex",
    //         flexWrap: "wrap",
    //         gap: 4,
    //       }}
    //     >
    //       {menus && menus.map((menu) => {
    //         return (
    //           <Paper elevation={3} sx={{ width: 320, textAlign: "center" }} key={menus.indexOf(menu)}>
    //             <Box
    //               sx={{
    //                 m: 3,
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 alignItems: "center",
    //               }}
    //             >
    //               <Typography variant='h2'>{menu.name}</Typography>
    //               <Box
    //                 component="img"
    //                 sx={{
    //                   mt: 2,
    //                   maxWidth: 200,
    //                   maxHeight: 200,
    //                 }}
    //                 alt='samples'
    //                 src={menu.image}
    //               />
    //               <Typography
    //                 variant='h3'
    //                 sx={{ mt: 2 }}
    //               >
    //                 Rp {menu.price.toLocaleString()},00
    //               </Typography>
    //               <Button variant='contained' color='secondary' sx={{ mt: 2 }}>
    //                 Add
    //               </Button>
    //             </Box>
    //           </Paper>
    //         )
    //       })}
    //     </Box>
    //   </Box>
    // </Container>
  )
}

export default App
