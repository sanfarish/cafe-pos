import { useEffect, useState } from 'react'
import { Box, Button, List, ListItem, ListItemText, Paper, SvgIcon, TextField, Typography } from '@mui/material'
import PropTypes from "prop-types"

function Orders() {

  // eslint-disable-next-line no-unused-vars
  const [menus, setMenus] = useState([
    {
      id: 0,
      name: "Pizza"
    },
    {
      id: 1,
      name: "Burger"
    }
  ])

  const [carts, setCarts] = useState([
    {
      id: 0,
      quantity: 1
    },
    {
      id: 1,
      quantity: 2
    }
  ])

  const [focus, setFocus] = useState(false)

  useEffect(() => {
    function dispose() {
      if (carts.some(object => object.quantity < 1) && !focus) {
        setCarts(prev => prev.filter(object => {
          if (object.quantity >= 1) {
            return object
          }
        }))
      }
    }
    dispose()
  }, [carts, focus])

  function Icon({ icon, fontSize, color }) {
    return <SvgIcon sx={{ fontSize, color }} ><i className={icon}></i></SvgIcon>
  }
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    color: PropTypes.string,
  }

  function handleButton(item, mode) {
    setCarts(prev => prev.map(object => {
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
    }))
  }
  
  function handleChange(item, quantity) {
    setCarts(prev => prev.map(object => {
      if (object.id === item.id && /./.test(quantity)) {
        return { ...object, quantity: parseInt(quantity) }
      }
      return object
    }))
  }

  return (
    <Paper elevation={6} sx={{ height: "100%", overflow: "auto" }}>
      {carts.length >= 1 ? <List>
        {carts.map(item => {
          return (
            <ListItem key={carts.indexOf(item)} sx={{ gap: 1 }}>

              <ListItemText primary={menus[item.id].name} />

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
                onFocus={(e) => {e.target.select(); setFocus(true)}}
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