import { Container, Paper, Typography } from '@mui/material'

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
      {serviceList.map((service) => (
        <Paper elevation={3}>
          <Typography variant='h3'>{service}</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vero? Rem, necessitatibus ab? Illo, esse. Natus sunt velit iusto ad qui saepe quaerat eligendi omnis! Ipsam, error cupiditate. Exercitationem a repudiandae odio recusandae dolore aspernatur. Inventore repellendus vero officiis assumenda reiciendis! Fugiat ullam, beatae magnam, impedit voluptates exercitationem maiores aliquam aut quaerat nobis distinctio a, quas eum modi cumque sequi. Nobis ut quia optio quas voluptate animi, eos sequi aspernatur eligendi natus molestiae minus quos voluptatem incidunt sint asperiores aliquid maxime id veritatis laboriosam voluptas odio repellat commodi! Rem quae minus vel asperiores atque velit officiis repellat impedit deleniti quas.
          </Typography>
        </Paper>
      ))}
    </Container>
  )
}

export default App
