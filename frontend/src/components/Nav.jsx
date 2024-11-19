import { useEffect, useState } from "react"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon, Toolbar } from "@mui/material"
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

  function Icon({ icon }) {
    return <SvgIcon><i className={icon}></i></SvgIcon>
  }
  Icon.propTypes = { icon: PropTypes.string.isRequired }

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: 175,
        [`& .MuiDrawer-paper`]: { width: 175, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {categories && categories.map(item => {
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
              <ListItemButton>
                <ListItemIcon>{icon()}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <Divider />
    </Drawer>
  )
}

export default Nav