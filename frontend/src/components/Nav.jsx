import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"

function Nav() {

  const category = [ "Meals", "Snacks", "Coffee", "Non-Coffee" ]

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: 200,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {category && category.map(item => {
          return (
            <ListItem key={category.indexOf(item)} disablePadding>
              <ListItemButton>
                <ListItemIcon>ICO</ListItemIcon>
              <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <List>
        {category && category.map(item => {
          return (
            <ListItem key={category.indexOf(item)} disablePadding>
              <ListItemButton>
                <ListItemIcon>ICO</ListItemIcon>
              <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}

export default Nav