import { Button, List, ListItem, ListItemText, Paper } from '@mui/material'

function Orders() {

  const orders = ["Food 1", "Food 2", "Food 3", "Food 4", "Food 5", "Food 6"]

  return (
    <Paper elevation={6} sx={{ height: "100%", overflow: "auto" }}>
      <List>
        {orders && orders.map(item => {
          return (
            <ListItem key={orders.indexOf(item)}>
              <ListItemText primary={item} />
              <Button variant='contained' size='small' color='primary'>Add</Button>
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}

export default Orders