import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import AwsLogoSvg from '../images/companies/aws-large.svg';
import EcciLogoSvg from '../images/companies/ecci-large.svg';

const educationList = [
  {
    title: "College Degree, Systems Engineering",
    school: "Universidad ECCI",
    dates: "2014 - 2019",
    icon: EcciLogoSvg
  },
  {
    title: "Architecting on AWS",
    school: "AWS Training & Certification",
    dates: "Issued Jul 2020",
    icon: AwsLogoSvg
  },
]

const Education = () => {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={2}>
        {educationList.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={12} md={6}>
              <img src={item.icon} alt={item.title} width={120} height={72} />
              <Typography gutterBottom variant="subtitle1" component="h4" style={{ fontWeight: 'bold' }}>
                {item.school}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h5">
                {item.title}
              </Typography>
              <Typography variant="subtitle2" component="div" color="textSecondary">
                {item.dates}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  )
}

export default Education;