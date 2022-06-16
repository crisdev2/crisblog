import React from 'react'
import Card from '@mui/material/Card'
import { AppBar, Avatar, Box, Button, CardActions, CardContent, CardMedia, createStyles, CssBaseline, Grid, Hidden, IconButton, makeStyles, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/system'
import MeIcon from '../images/me.jpg'
import Me2Icon from '../images/me2.jpg'
import DogImage from '../images/dog.jpg'
import CityImage from '../images/bogota.jpg'
import TeamImage from '../images/radio.jpg'
import FamilyImage from '../images/family.jpg'
import MotoImage from '../images/moto.jpg'
import FriendsImage from '../images/friends.jpg'
import Logo from '../images/logo.svg'
import GlobalStyles from "@mui/material/GlobalStyles";
import PersonIcon from '@mui/icons-material/Person';
import Link from '@mui/material/Link';


const likesList = [
  {
    title: "I'm from Bogotá",
    description: "I live in Medellín since december 2021",
    image: CityImage
  },
  {
    title: "I like teamwork",
    description: "Building new digital products in december 2020",
    image: TeamImage
  },
  {
    title: "I love pets",
    description: "It's Marshall and me in march 2019",
    image: DogImage
  },
  {
    title: "That's my family",
    description: "On october 2019 in La Palma, Cundinamarca",
    image: FamilyImage
  },
  {
    title: "I like motorcycles",
    description: "That's me traveling in Colombia",
    image: MotoImage
  },
  {
    title: "That's my friends",
    description: "There is always time for a good beer",
    image: FriendsImage
  },
];

const IndexPage = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#f1f1f1" }
        }}
      />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Cristian Anzola" src={MeIcon} sx={{ mr: 1 }} />
          <Box sx={{ flexGrow: 1 }}>
            <img alt="Logo" src={Logo} width={110} color="#fff" />
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box component="main" style={{ background: "#fff", padding: "32px 20px" }}>
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <Avatar alt="Cristian Anzola" src={Me2Icon} sx={{ width: 180, height: 180, margin: 'auto' }} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography gutterBottom variant="h5" component="h1">
                Cristian Anzola
              </Typography>
              <Typography component="p" color="#7b7b7b" gutterBottom>
                Developer and Digital Leader
              </Typography>
              <Typography component="p" gutterBottom>
                🇨🇴 Medellín, Colombia
              </Typography>
              <Typography component="p" gutterBottom>
                📱 <Link href="tel:+573124109315">+57 3124109315</Link>
              </Typography>
              <Typography component="p" gutterBottom>
                ✉️ <Link href="mailto:da.anzola@gmail.com">da.anzola@gmail.com</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="main" style={{ padding: "16px 20px" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} justifyContent="center">
            {likesList.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card style={{ minHeight: 260 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box component="main" style={{ background: "#fff", padding: "64px 20px" }}>
        <Container maxWidth="sm">
          <Hidden only="xs">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              About me
            </Typography>
          </Hidden>
          <Hidden only={['sm', 'md', 'lg', 'xl']}>
            <Typography component="div" variant="h4" align="center" gutterBottom>
              My professional profile
            </Typography>
          </Hidden>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            I'm a web developer and digital leader with +7 years of experience working in enterprise-level projects of public and private companies. 
            I'm an organized and result-oriented person who is always looking to help my co-workers, learn from them and also share my knowledge.
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default IndexPage