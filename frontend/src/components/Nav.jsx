import { useEffect, useState } from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon, Toolbar, Typography } from "@mui/material"
import PropTypes from "prop-types"
import { category } from '../apis'

function Nav() {

  const [categories, setCategories] = useState([])

  useEffect(() => {

    async function fetchCategories() {
      const res = await category.getAll()
      setCategories(res.data)
    }

    fetchCategories()
  }, [])

  function Icon({ icon, fontSize, color }) {
    return <SvgIcon sx={{ fontSize, color }} ><i className={icon}></i></SvgIcon>
  }
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    color: PropTypes.string,
  }

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: 175,
        [`& .MuiDrawer-paper`]: { width: 175, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      {categories.length >= 1 ? <List>
        {categories.map(item => {
          function icon() {
            switch (item.name) {
              case "Meals":
                return <Icon icon="fa-solid fa-bowl-rice" />
              case "Snacks":
                return <Icon icon="fa-solid fa-burger" />
              case "Desserts":
                return <Icon icon="fa-solid fa-ice-cream" />
              case "Coffee":
                return <Icon icon="fa-solid fa-mug-saucer" />
              case "Non-Coffee":
                return <Icon icon="fa-solid fa-whiskey-glass" />
              case "Tea":
                return <Icon icon="fa-solid fa-glass-water" />
              default:
                return <></>
            }
          }
          return (
            <ListItem key={categories.indexOf(item)} disablePadding>
              <ListItemButton sx={{ pt: 2, pb: 2 }}>
                <ListItemIcon>{icon()}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List> : <Box textAlign="center" mt={2} mb={2}>
        <Icon icon="fa-solid fa-box-open" fontSize={40} color="gray" />
        <Typography color='gray'>No Category Available</Typography>
      </Box>}
      <Divider />
    </Drawer>
  )
}

export default Nav