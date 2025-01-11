import { Button, ListItem, ListItemText, Paper, TextField, Typography } from '@mui/material'
import { useOrder } from '../contexts/OrderContext'
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export default function Subtotal() {
  const { order } = useOrder()

  async function handlePay() {
    const data = {
      id: crypto.randomUUID(),
      total: order.total
    }
    console.log(data)
    axios.post("/orders", data)
    .then(res => {
      console.log(res.data)
      window.snap.pay(res.data.token)
    })
  }
  
  return (
    <Paper elevation={6} sx={{ p: 2 }}>

      <ListItem disablePadding>
        <ListItemText primary="Subtotal" />
        <Typography>{order.total}</Typography>
      </ListItem>

      <TextField variant="outlined" size='medium' label="Table Number" fullWidth
        sx={{ mt: 1, mb: 1 }}
      />

      <Button variant='contained' size='large' fullWidth
        onClick={handlePay}
      >Pay</Button>
    </Paper>
  )
}
