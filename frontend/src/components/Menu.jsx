import { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Paper, SvgIcon, TextField, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import PropTypes from 'prop-types'
import useAPI from '../hooks/useAPI'
import { useData } from '../contexts/DataProvider'
import { useOrder } from '../contexts/OrderContext'

export default function Menu() {

  // eslint-disable-next-line no-unused-vars
  const { response, error, loading } = useAPI({ method: "get", url: "/menus" })
  const { menus, setMenus } = useData()
  const { order, setOrder } = useOrder()
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    if (response !== null) {
      setMenus(response)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  useEffect(() => {
    function dispose() {
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
    dispose()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, focus])

  function Icon({ icon, fontSize, color }) {
    return <SvgIcon sx={{ fontSize, color }}><i className={icon}></i></SvgIcon>
  }
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    color: PropTypes.string,
  }

  function handleAdd(item) {
    setOrder(prev => {
      return { ...prev, cart: [...prev.cart, { id: item.id, quantity: 1 }]}
    })
  }

  function handleButton(item, mode) {
    setOrder(prev => {
      return { ...prev, cart: prev.cart.map(object => {
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
      })}
    })
  }

  function handleChange(item, quantity) {
    setOrder(prev => {
      return { ...prev, cart: prev.cart.map(object => {
        if (object.id === item.id && /./.test(quantity)) {
          return { ...object, quantity: parseInt(quantity) }
        }
        return object
      })}
    })
  }

  return (
    <Paper elevation={6}
      sx={{
        p: 4,
        height: "100%",
        overflow: "auto",
      }}
    >
      { menus.length >= 1 ? <Grid container spacing={2}>
        {menus.map(item => {
          return (
            <Grid size={3} key={menus.indexOf(item)}>
              <Card elevation={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", maxHeight: 178 }}
                  image={item.image}
                  title={item.name}
                  alt={item.name}
                />
                <CardContent sx={{ p: 1, textAlign: "center" }}>
                  <Typography variant='h5' mt={1} mb={1} height={60}>{item.name}</Typography>
                  <Typography variant='h6'>Rp {item.price.toLocaleString()},00</Typography>
                </CardContent>
                <CardActions>
                {order.cart.some(e => e.id === item.id) ? <Box display="flex" alignItems="center" gap={1}>

                  <Button variant="contained" size='small'
                    sx={{ minWidth: "30px", pl: 0, pr: 0 }}
                    onClick={() => handleButton(item, "remove")}
                  >
                    <Icon icon="fa-solid fa-minus" />
                  </Button>

                  <TextField variant="outlined" size='small' type='number'
                    slotProps={{ htmlInput: { min: 0, style: { textAlign: "center" } } }}
                    sx={{ width: "50px" }}
                    value={order.cart.find(e => e.id === item.id).quantity}
                    onChange={e => handleChange(item, e.target.value)}
                    onFocus={(e) => {e.target.select(); setFocus(true)}}
                    onBlur={() => setFocus(false)}
                  />

                  <Button variant="contained" size='small'
                    sx={{ minWidth: "30px", pl: 0, pr: 0 }}
                    onClick={() => handleButton(item, "add")}
                  >
                    <Icon icon="fa-solid fa-plus" />
                  </Button>
                </Box> : <Button variant='contained' size='medium'
                sx={{ mb: 0.5 }}
                  onClick={() => handleAdd(item)}
                >Add</Button>}
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid> : <Box textAlign="center" mt={2}>
        <Icon icon="fa-solid fa-box-open" fontSize={80} color="gray"/>
        <Typography variant='h5' color='gray'>No Menu Available</Typography>
      </Box>}
    </Paper>
  )
}
