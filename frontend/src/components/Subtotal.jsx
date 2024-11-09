import * as React from 'react'
import { Box, Button, FormControl, InputLabel, List, ListItem, ListItemText, MenuItem, Paper, Select } from '@mui/material'
import { payment } from '../apis'

function Subtotal() {

  const [payments, setPayments] = React.useState([])
  const [input, setInput] = React.useState("")

  React.useEffect(() => {

    async function fetchPayments() {
      const res = await payment.getAll()
      setPayments(res.data)
    }

    fetchPayments()
  }, [])

  function handleChange(e) {
    setInput(e.target.value)
  }
  
  return (
    <Paper elevation={6}>
      <List>
        <ListItem>
          <ListItemText primary="Subtotal" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tax" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Total" />
        </ListItem>
      </List>
      <Box sx={{ p: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <FormControl fullWidth>
          <InputLabel id="payment">Payment</InputLabel>
          <Select
            labelId="payment"
            // id="payment-select"
            value={input}
            label="Payment"
            onChange={handleChange}
          >
            {payments && payments.map(item => {
              return <MenuItem key={payments.indexOf(item)} value={item.id}>{item.name}</MenuItem>
            })}
          </Select>
        </FormControl>
        <Button sx={{ m:1, width: "100%" }} variant='contained' size='medium'>Pay</Button>
      </Box>
    </Paper>
  )
}

export default Subtotal