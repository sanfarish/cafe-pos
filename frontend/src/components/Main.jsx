import { Box, Toolbar } from '@mui/material'
import Grid from "@mui/material/Grid2"
import Menu from './Menu'
import Orders from './Orders'
import Subtotal from './Subtotal'

function Main() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Grid container spacing={2} sx={{ height: "calc(100% - 40px - 20px)" }}>
        <Grid size={8} sx={{ height: "100%" }}>
          <Menu />
        </Grid>
        <Grid
          size={4}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 2
          }}
        >
          <Orders />
          <Subtotal />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main