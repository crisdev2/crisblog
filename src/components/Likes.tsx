import React from 'react';
import DogImage from '../images/dog.jpg'
import CityImage from '../images/bogota.jpg'
import TeamImage from '../images/radio.jpg'
import FamilyImage from '../images/family.jpg'
import MotoImage from '../images/moto.jpg'
import FriendsImage from '../images/friends.jpg'
import { Container } from '@mui/system';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

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

const Likes = () => {
  return (
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
  )
}

export default Likes;