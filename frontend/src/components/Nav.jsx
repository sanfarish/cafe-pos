import { useEffect } from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon, Toolbar, Typography } from "@mui/material"
import PropTypes from "prop-types"
import useAPI from "../hooks/useAPI"
import { useData } from "../contexts/DataProvider"
import { useOrder } from "../contexts/OrderContext"

export default function Nav() {

  // eslint-disable-next-line no-unused-vars
  const { response, error, loading } = useAPI({ method: "get", url: "/categories" })
  const { categories, setCategories } = useData()
  const { activeCategory, setActiveCategory } = useOrder()

  useEffect(() => {
    if (categories.length >= 1 && activeCategory === null) {
      setActiveCategory(categories[0].id)
    }
  }, [categories])

  useEffect(() => {
    if (response !== null) {
      setCategories(response)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

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
              <ListItemButton
                sx={{ pt: 2, pb: 2 }}
                onClick={() => setActiveCategory(item.id)}
                selected={activeCategory === item.id}
              >
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
