import { Button, Divider, List, ListItem, ListItemText, Paper } from '@mui/material'

function Orders() {
  return (
    <Paper elevation={6}>
      <List>
        <ListItem>
          <ListItemText primary="Food" />
          <Button variant='contained' size='small' color='primary'>Add</Button>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Food" />
          <Button variant='contained' size='small' color='primary'>Add</Button>
        </ListItem>
      </List>
    </Paper>
  )
}

export default Orders