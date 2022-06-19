import React from 'react';
import { Avatar, Chip, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Container } from '@mui/system';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AwsSvg from '../images/skills/aws.svg';
import DrupalSvg from '../images/skills/drupal.svg';
import GraphqlSvg from '../images/skills/graphql.svg';
import JsSvg from '../images/skills/javascript.svg';
import MysqlSvg from '../images/skills/mysql.svg';
import PhpSvg from '../images/skills/php.svg';
import ReactSvg from '../images/skills/react.svg';
import TsSvg from '../images/skills/typescript.svg';
import LogoBisa from '../images/companies/bisa.svg';
import LogoRcn from '../images/companies/rcn.svg';
import LogoRtvc from '../images/companies/rtvc.svg';
import LogoViamericas from '../images/companies/viamericas.svg';

const experienceList = [
  {
    title: "Senior Developer",
    company: "Viamericas Corporation",
    link: "https://corporate.viamericas.com/",
    icon: LogoViamericas,
    dates: "Mar 2022 - Present · 4 mos",
    skills: [8, 2, 7, 1],
    tasks: [
      "Create new APIs on the transaction platform",
      "Implement security mechanisms",
      "Reduce error indicators during transactions",
      "Automate identity validation flows"
    ],
  },
  {
    title: "Back End Developer",
    company: "RCN Radio",
    link: "https://www.rcnradio.com/",
    icon: LogoRcn,
    dates: "Mar 2021 - Feb 2022 · 1 yr",
    skills: [5, 4, 6, 2],
    tasks: [
      "Improve websites speed and optimize architecture",
      "Create new features, modules and sections",
      "Implement Search Engine Optimization (SEO)",
      "Adapt AMP and Instant Articles on websites"
    ],
  },
  {
    title: "Product Owner",
    company: "RTVC, Sistema de Medios Públicos",
    link: "https://www.rtvc.gov.co/",
    icon: LogoRtvc,
    dates: "Aug 2017 - Feb 2021 · 3 yrs 7 mos",
    skills: [1, 2, 5, 4],
    tasks: [
      "Manage radio and OTT websites and mobile applications",
      "Implement a streaming solution for VOD and Live content",
      "Lead a team of developers, designers and testers",
      "Implement new digital platforms for content distribution"
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Bisa Corporation",
    link: "https://www.bisacorporation.com/",
    icon: LogoBisa,
    dates: "Aug 2014 - Jul 2017 · 3 yrs",
    skills: [4, 2, 6, 5],
    tasks: [
      "Design and develop websites and information systems",
      "Managed and improve databases structure",
      "Provide support to company clients",
      "Define requirements together with clients",
    ],
  },
]

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
]

const Experience = () => {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={2}>
        {experienceList.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={6}>
              <img src={item.icon} alt={item.title} width={120} height={72} />
              <Typography gutterBottom variant="subtitle1" component="h4" style={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle2" component="div" color="textSecondary">
                {item.dates}
              </Typography>
              <Typography component="div">
                <List
                  sx={{ width: '100%' }}
                  aria-label="contacts"
                >
                  {item.tasks.map((task, i) => (
                    <ListItem disablePadding key={i}>
                      <ListItemButton sx={{ p: 0, pl: 0 }} >
                        <ListItemIcon style={{ minWidth: 25 }}>
                          <CheckBoxIcon color="info" fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="subtitle2" component="div" sx={{ color: 'text.primary' }}>
                          <ListItemText primary={task} disableTypography/>
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Typography>
              <Typography component="p" sx={{ mb: 2, mt: 2 }}>
                {item.skills.map((skill, i) => (
                  <Chip
                    avatar={<Avatar alt={skillList.find(sk => sk.id === skill)?.title} src={skillList.find(sk => sk.id === skill)?.icon} />}
                    label={skillList.find(sk => sk.id === skill)?.title}
                    sx={{ mr: 2, mb: 1 }}
                    key={i}
                  />
                ))}
              </Typography>
              <Typography component="p" sx={{ mb: 5 }}>
                <Link href={item.link} target="_blank">Go to website</Link>
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  )
}

export default Experience;