import { Box, Button, Container, Paper, Typography } from '@mui/material'

const serviceList = ["Service 1", "Service 2", "Service 3"]

function App() {
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
        {serviceList.map((service) => (
          // eslint-disable-next-line react/jsx-key
          <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }}>
            <Box sx={{ m: 3 }}>
              <Typography variant='h3'>{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque facere voluptatum! In dignissimos maxime nostrum saepe asperiores rem officia commodi, quis consequatur, ut autem inventore perspiciatis illo, sequi ad dolor distinctio velit! Quae sunt corrupti iste molestias? Doloribus illum nobis exercitationem quas amet consectetur ex sed voluptates suscipit inventore!
              </Typography>
              <Button variant='contained' color='secondary' sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  )
}

export default App
