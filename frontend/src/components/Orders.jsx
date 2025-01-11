import { useEffect } from 'react'
import { Box, Button, List, ListItem, ListItemText, Paper, SvgIcon, TextField, Typography } from '@mui/material'
import PropTypes from "prop-types"
import { useData } from '../contexts/DataProvider'
import { useOrder } from '../contexts/OrderContext'

function Orders() {

  const { menus } = useData()
  const { order, setOrder, focus, setFocus } = useOrder()

  useEffect(() => {
    function removeByFocus() {
      if (order.cart.some(object => object.quantity < 1) && !focus) {
        setOrder(prev => {
          return { ...prev, cart: prev.cart.filter(object => {
            if (object.quantity >= 1) {
              return object
            }
          })}
        })
      }
    }
    removeByFocus()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, focus])

  function Icon({ icon, fontSize, color }) {
    return <SvgIcon sx={{ fontSize, color }} ><i className={icon}></i></SvgIcon>
  }
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    color: PropTypes.string,
  }

  function handleButton(item, mode) {
    setOrder(prev => {
      let cart = prev.cart.map(object => {
        if (object.id === item.id) {
          switch (mode) {
            case "add":
              return { ...object, quantity: Number(object.quantity) + 1 }
            case "remove":
              return { ...object, quantity: Number(object.quantity) - 1 }
            default:
              break
          }
        }
        return object
      })
      if (cart.some(object => object.quantity < 1)) {
        cart = cart.filter(object => object.quantity >= 1 && object)
      }
      const total = prev.total + (mode === "add" ? item.price : -item.price)
      return { ...prev, cart, total }
    })
  }
  
  function handleChange(item, quantity) {
    setOrder(prev => {
      const cart = prev.cart.map(object => {
        if (object.id === item.id && /./.test(quantity)) {
          return { ...object, quantity: parseInt(quantity) }
        }
        return object
      })
      let total = prev.total
      const oldItem = prev.cart.filter(object => object.id === item.id)
      const oldQuantity = oldItem[0].quantity
      if (/./.test(quantity)) {
        if (parseInt(quantity) > oldQuantity) {
          total = prev.total + ((parseInt(quantity) - oldQuantity) * item.price)
        } else if (parseInt(quantity) < oldQuantity) {
          total = prev.total - ((oldQuantity - parseInt(quantity)) * item.price)
        }
      }
      return { ...prev, cart, total }
    })
  }

  return (
    <Paper elevation={6} sx={{ height: "100%", overflow: "auto" }}>
      {order.cart.length >= 1 ? <List>
        {order.cart.map(item => {
          return (
            <ListItem key={order.cart.indexOf(item)} sx={{ gap: 1 }}>

              <ListItemText primary={menus.find(e => e.id === item.id).name} />

              <Button variant="contained" size='small'
                sx={{ minWidth: "30px", pl: 0, pr: 0 }}
                onClick={() => handleButton(item, "remove")}
              >
                <Icon icon="fa-solid fa-minus" />
              </Button>

              <TextField variant="outlined" size='small' type='number'
                slotProps={{ htmlInput: { min: 0, style: { textAlign: "center" } } }}
                sx={{ width: "50px" }}
                value={item.quantity}
                onChange={e => handleChange(item, e.target.value)}
                onFocus={(e) => {
                  e.target.select()
                  setFocus(true)
                }}
                onBlur={() => setFocus(false)}
              />

              <Button variant="contained" size='small'
                sx={{ minWidth: "30px", pl: 0, pr: 0 }}
                onClick={() => handleButton(item, "add")}
              >
                <Icon icon="fa-solid fa-plus" />
              </Button>

            </ListItem>
          )
        })}
      </List> : <Box textAlign="center" mt={2}>
        <Icon icon="fa-solid fa-box-open" fontSize={40} color="gray" />
        <Typography color='gray'>No Orders Available</Typography>
      </Box>}
    </Paper>
  )
}

export default Orders