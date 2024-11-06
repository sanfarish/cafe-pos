import { AppBar, Box, Toolbar, Typography } from '@mui/material'

function Header() {
  
  return (
    <Box>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography> Menu</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header