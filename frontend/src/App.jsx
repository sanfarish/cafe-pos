import { Box, Button, Container, Paper, Typography } from '@mui/material'

function App() {

  const menus = [
    {
      name: "Sandwich",
      pic: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum quos consequatur iste itaque dolores sapiente repellat praesentium nam reiciendis ipsum voluptas atque natus autem doloribus, quo aspernatur quis labore.",
    },
    {
      name: "Coffee Latte",
      pic: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum quos consequatur iste itaque dolores sapiente repellat praesentium nam reiciendis ipsum voluptas atque natus autem doloribus, quo aspernatur quis labore.",
    },
    {
      name: "Fruit Salad",
      pic: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum quos consequatur iste itaque dolores sapiente repellat praesentium nam reiciendis ipsum voluptas atque natus autem doloribus, quo aspernatur quis labore.",
    },
    {
      name: "Pizza",
      pic: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum quos consequatur iste itaque dolores sapiente repellat praesentium nam reiciendis ipsum voluptas atque natus autem doloribus, quo aspernatur quis labore.",
    },
    {
      name: "Milk Tea",
      pic: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum quos consequatur iste itaque dolores sapiente repellat praesentium nam reiciendis ipsum voluptas atque natus autem doloribus, quo aspernatur quis labore.",
    },
  ]

  return (
    <Container>
      <Typography
        variant='h1'
        sx={{ my: 4, textAlign: "center", color: "primary.main"}}
      >
        Services
      </Typography>
      <Typography variant='h2'>Overview</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: 320, md: 672, lg: 1024 },
            pt: 4,
            pb: 4,
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {menus.map((menu) => {
            return (
              <Paper elevation={3} sx={{ width: 320, textAlign: "center" }} key={menus.indexOf(menu)}>
                <Box sx={{ m: 3 }}>
                  <Typography variant='h3'>{menu.name}</Typography>
                  <Typography sx={{ mt: 2 }}>
                    {menu.pic}
                  </Typography>
                  <Button variant='contained' color='secondary' sx={{ mt: 2 }}>
                    Add
                  </Button>
                </Box>
              </Paper>
            )
          })}
        </Box>
      </Box>
    </Container>
  )
}

export default App
