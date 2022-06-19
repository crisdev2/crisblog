import React from 'react';
import { Avatar, Grid, Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Me2Icon from '../images/me2.jpg'

const Cover = () => {
  return (
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
  )
}

export default Cover;