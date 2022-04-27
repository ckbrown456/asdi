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
import ResponsiveAppBar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import asdlc from '../assets/asdlc.svg'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" style={{textDecoration: 'none', color: 'black'}} to="/" >
        ASDI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



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

function PricingContent() {
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
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }} style={{padding: '3%', marginTop: '2%'}}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Accelerated Software Development Initiative
        </Typography>
        <Typography variant="p" align="center" color="text.secondary" component="p" style={{padding: '4%'}}>
            Researching, developing and sharing innovative practices for ANY vendor to deploy high- quality software under restricted timeframes.
        </Typography>
        <img src={asdlc} width="100%" height="auto" />
      </Container>
      {/* End hero unit */}
      

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >

        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}