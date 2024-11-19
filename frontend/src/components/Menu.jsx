import { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Paper, SvgIcon, TextField, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import PropTypes from 'prop-types'
import { menu } from '../apis'

function Menu() {

  const [menus, setMenus] = useState([])
  const [carts, setCarts] = useState([
    { id: 1, quantity: 1 },
  ])
  const [focus, setFocus] = useState(false)

  useEffect(() => {

    async function fetchMenus() {
      const res = await menu.getAll()
      setMenus(res.data)
    }

    fetchMenus()
  }, [])

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
    return <SvgIcon sx={{ fontSize, color }}><i className={icon}></i></SvgIcon>
  }
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    color: PropTypes.string,
  }

  function handleAdd(item) {
    setCarts(prev => [...prev, { id: item.id, quantity: 1 }])
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
                <CardContent sx={{ p: 1 }}>
                  <Typography variant='h5'>{item.name}</Typography>
                  <Typography variant='h6'>Rp {item.price.toLocaleString()},00</Typography>
                </CardContent>
                <CardActions>
                {!carts.some(e => e.id === item.id) ? <Button variant='contained' size='medium'
                  onClick={() => handleAdd(item)}
                >Add</Button> : <Box display="flex" alignItems="center" gap={1}>

                  <Button variant="contained" size='small'
                    sx={{ minWidth: "30px", pl: 0, pr: 0 }}
                    onClick={() => handleButton(item, "remove")}
                  >
                    <Icon icon="fa-solid fa-minus" />
                  </Button>

                  <TextField variant="outlined" size='small' type='number'
                    slotProps={{ htmlInput: { min: 0, style: { textAlign: "center" } } }}
                    sx={{ width: "50px" }}
                    value={carts.find(e => e.id === item.id).quantity}
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
                </Box>}
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

export default Menu
