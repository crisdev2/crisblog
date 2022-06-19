import { Grid, Rating, Tooltip, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import AwsSvg from '../images/skills/aws.svg';
import DrupalSvg from '../images/skills/drupal.svg';
import GraphqlSvg from '../images/skills/graphql.svg';
import JsSvg from '../images/skills/javascript.svg';
import MysqlSvg from '../images/skills/mysql.svg';
import PhpSvg from '../images/skills/php.svg';
import ReactSvg from '../images/skills/react.svg';
import TsSvg from '../images/skills/typescript.svg';

const skillList = [
  {
    id: 1,
    title: "React.JS",
    icon: ReactSvg,
    value: 4.5
  },
  {
    id: 2,
    title: "Javascript",
    icon: JsSvg,
    value: 4.5
  },
  {
    id: 3,
    title: "Typescript",
    icon: TsSvg,
    value: 4.0
  },
  {
    id: 4,
    title: "PHP",
    icon: PhpSvg,
    value: 4.0
  },
  {
    id: 5,
    title: "Drupal",
    icon: DrupalSvg,
    value: 4.0
  },
  {
    id: 6,
    title: "MySQL",
    icon: MysqlSvg,
    value: 3.5
  },
  {
    id: 7,
    title: "GraphQL",
    icon: GraphqlSvg,
    value: 3.5
  },
  {
    id: 8,
    title: "AWS",
    icon: AwsSvg,
    value: 3.0
  },
];

const Skills = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4} justifyContent="center" style={{ textAlign: 'center' }}>
        {skillList.map((item, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <Typography component="h4" variant="body1">{item.title}</Typography>
            <Box sx={{ p: 1 }}>
              <Tooltip title={`${item.value.toFixed(1)} of 5.0`} placement="right">
                <img src={item.icon} alt={item.title} width={60} height={60} />
              </Tooltip>
            </Box>
            <Rating name="half-rating-read" defaultValue={item.value} precision={0.5} readOnly />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Skills;