import { Box, Button, List, ListItem, ListItemText, Paper } from '@mui/material'

function Subtotal() {
  
  return (
    <Paper elevation={6}>
      <List>
        <ListItem>
          <ListItemText primary="Subtotal" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tax" />
        </ListItem>
      </List>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant='contained' size='medium'>Pay</Button>
      </Box>
    </Paper>
  )
}

export default Subtotal