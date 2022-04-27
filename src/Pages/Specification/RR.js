import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/Navbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Footer from '../../components/Footer'

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
    url: ['https://google.com', 'https://facebook.com', 'https://google.com', 'https://google.com']
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    url: ['https://google.com', 'https://facebook.com', 'https://google.com', 'https://google.com']
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    url: ['https://google.com', 'https://facebook.com', 'https://google.com', 'https://google.com']
  },
];

function RRContent() {
  return (
    <React.Fragment style={{padding: '3%'}}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <ResponsiveAppBar />
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="m" component="main" sx={{ pt: 8, pb: 6 }} >
        <Typography
          component="p"
          variant="p"
          align="left"
          color="text.secondary"
          style={{ padding: "4%" }}
        >
          <Link to="/Membership"><i style={{color: 'gray', textUnderlinePosition: 'none'}}>Contribute</i></Link><br /><br />
          <b><u>Research & Requirements</u></b><br /><br />
          <b>What is the ASDI Requirements Specification?</b><br />
          The ASDI Requirements Specification is a set of practices used to scale the Requirements Engineering phase of a Traditional SDLC down to a short yet comprehensive operation. The goal of this specification is to provide developers and managers with innovative techniques to accelerate the requirements building process.<br /><br />
          <b>Overview</b><br />
          Traditional practices involved in Requirements Engineering (from domain research all the way to SRS/PRD delivery) will be stated over the course of this document. <br />
          Each practice will include a name, short description and purpose. <br /><br />
          Name : Name of Practice<br />
          Short Description : Brief Method of action<br />
          Purpose : Purpose of Practice<br /><br />
          Alongside each traditional practice, is an alternative (accelerated) approach. <br />
          Accelerated approaches fulfill the concepts and goals of traditional practices but are refined to speed up the RE phase.<br /><br />
          <b>Speed VS Accuracy</b><br />
          The Accelerated Software Development Life Cycle and it's practices will not work if the goals of traditional approaches are not met.<br /> Each accelerated approach will have a "proposed" or "approved" tag signifying it's completion of a thorough examination against it's traditional counterpart. <br /><br />
          <b>Statements & Releases</b><br />
          ASDI is open source. All of it's resources are currently free and open to the public. The initiative does not ask for money, however it whole-heartedly welcomes
          advocates and supporters for accelerated software development life cycles in today's economy. <Link to="/Membership"><span style={{color: 'gray'}}>If this is you, please consider joining the community.</span></Link><br/><br />
          ASDI Specifications will be released in increments, with the first available late April. <br />
      
          </Typography>
      </Container>
      {/* End hero unit */}
      
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
      
          

  
        </Grid>
      </Container>
     <Footer />
    </React.Fragment>
  );
}

export default function RR() {
  return <RRContent />;
}