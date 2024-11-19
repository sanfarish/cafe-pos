import { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, List, ListItem, ListItemText, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import useAPI from '../hooks/useAPI'
import { useData } from '../contexts/DataProvider'

export default function Subtotal() {

  // eslint-disable-next-line no-unused-vars
  const { response, error, loading } = useAPI({ method: "get", url: "/payments" })
  const { payments, setPayments } = useData()
  const [input, setInput] = useState("")

  useEffect(() => {
    if (response !== null) {
      setPayments(response)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  function handleChange(e) {
    setInput(e.target.value)
  }
  
  return (
    <Paper elevation={6} sx={{ p: 2 }}>

      <List disablePadding>

        <ListItem disablePadding>
          <ListItemText primary="Subtotal" />
          <Typography>Rp xxx.xxx,xx</Typography>
        </ListItem>

        <ListItem disablePadding>
          <ListItemText primary="Tax" />
          <Typography>(10%) Rp xxx.xxx,xx</Typography>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemText primary="Total" />
          <Typography>Rp xxx.xxx,xx</Typography>
        </ListItem>
      </List>

      <TextField variant="outlined" size='medium' label="Name" fullWidth
        sx={{ mt: 1, mb: 1 }}
      />

      <FormControl fullWidth sx={{ mb: 1 }}>
        <InputLabel id="payment">Payment</InputLabel>
        <Select
          labelId="payment"
          value={input}
          label="Payment"
          onChange={handleChange}
        >
          {payments && payments.map(item => {
            return <MenuItem key={payments.indexOf(item)} value={item.id}>{item.name}</MenuItem>
          })}
        </Select>
      </FormControl>

      <Button variant='contained' size='large' fullWidth>Pay</Button>
    </Paper>
  )
}
