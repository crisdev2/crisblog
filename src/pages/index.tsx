import React from 'react'
import Card from '@mui/material/Card'
import { AppBar, Avatar, Box, Button, CssBaseline, Divider, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Helmet } from 'react-helmet';
import { Container } from '@mui/system'
import MeIcon from '../images/me.jpg'
import Logo from '../images/logo.svg'
import GlobalStyles from "@mui/material/GlobalStyles";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Cover from '../components/Cover'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import AboutMe from '../components/AboutMe'
import Likes from '../components/Likes'
import Education from '../components/Education'

const IndexPage = () => {
  const seo = {
    title: 'Developer Profile - Cristian Anzola',
    description: 'Web developer with 7 years of experience working with enterprise level projects based on JavaScript, React.JS, Drupal, PHP, AWS and other technologies.',

  };
  return (
    <>
      <CssBaseline />
      <Helmet
        title={seo.title}
        htmlAttributes={{
          lang: 'en'
        }}
        meta={[
          {
            name: 'description',
            content: seo.description,
          },
          {
            property: 'og:title',
            content: seo.title,
          },
          {
            property: 'og:description',
            content: seo.description,
          },
          {
            property: 'og:type',
            content: 'website',
          },
        ]}
      />
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
        </Toolbar>
      </AppBar>
      <Box>
        <Box component="main" style={{ background: "#fff", padding: "32px 20px" }}>
          <Cover />
        </Box>
        <Box component="main" style={{ padding: "32px 20px" }}>
          <Skills />
        </Box>
        <Box component="main" style={{ background: "#fff", padding: "64px 20px" }}>
          <AboutMe />
        </Box>
        <Box component="main" style={{ padding: "16px 20px" }}>
          <Education />
        </Box>
        <Box component="main" style={{ background: "#fff", padding: "64px 20px" }}>
          <Experience />
        </Box>
        <Box component="main" style={{ padding: "64px 20px" }}>
          <Likes />
        </Box>
      </Box>
      <Divider variant="fullWidth"/>
      <Box component="div" sx={{ background: "#fff" }}>
        <Container maxWidth="md">
          <Box style={{ padding: "34px 0", display: "flex", justifyContent: "space-between" }} alignItems="center">
            <Typography variant="body2" component="span" color="textSecondary">
              Cris's Blog - Based on GatsbyJS.
            </Typography>
            <Typography variant="body2" component="span" color="textSecondary">
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <Link href="https://www.linkedin.com/in/cristian-anzola/" target="_blank"><LinkedInIcon sx={{ color: 'text.secondary' }} /></Link>
                </Grid>
                <Grid item>
                  <Link href="https://github.com/crisdev2" target="_blank"><GitHubIcon sx={{ color: 'text.secondary' }} /></Link>
                </Grid>
              </Grid>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default IndexPage