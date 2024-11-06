import { Box, Toolbar } from '@mui/material'
import Grid from "@mui/material/Grid2"
import Menu from './Menu'
import Orders from './Orders'
import Subtotal from './Subtotal'

function Main() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Grid container spacing={2}>
        <Grid size={8}>
          <Menu />
        </Grid>
        <Grid size={4}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Orders />
            </Grid>
            <Grid size={12}>
              <Subtotal />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main