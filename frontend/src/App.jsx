import { Box, Button, Container, Paper, Typography } from '@mui/material'


function App() {

  const serviceList = ["Service 1", "Service 2", "Service 3"]

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
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {serviceList.map((service) => {
          return (
            <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }} key={serviceList.indexOf(service)}>
              <Box sx={{ m: 3 }}>
                <Typography variant='h3'>{service}</Typography>
                <Typography sx={{ mt: 2 }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum quos consequatur iste itaque dolores sapiente repellat praesentium nam reiciendis ipsum voluptas atque natus autem doloribus, quo aspernatur quis labore.
                </Typography>
                <Button variant='contained' color='secondary' sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </Box>
            </Paper>
          )
        })}
      </Box>
    </Container>
  )
}

export default App
