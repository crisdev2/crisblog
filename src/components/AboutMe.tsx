import { Hidden, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const AboutMe = () => {
  return (
    <Container maxWidth="sm">
      <Hidden only="xs">
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          About me
        </Typography>
      </Hidden>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <Typography component="div" variant="h4" align="center" gutterBottom>
          About me
        </Typography>
      </Hidden>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        I'm a web developer and digital leader with +7 years of experience working in enterprise-level projects of public and private companies. 
        I'm an organized and result-oriented person who is always looking to help my co-workers, learn from them and also share my knowledge.
      </Typography>
    </Container>
  )
}

export default AboutMe;