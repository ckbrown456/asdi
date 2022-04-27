import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import asdlc from "../assets/asdlc.svg";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";
import { useEffect } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Register from "../components/Register";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import logo from '../assets/logo.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const sendForm = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_l85jgqp",
      process.env.REACT_APP_TEMPLATE,
      e.target,
      process.env.REACT_APP_USER
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  alert("Form Submitted");
  e.target.reset();
};



const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
    url: [
      "https://google.com",
      "https://facebook.com",
      "https://google.com",
      "https://google.com",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
    url: [
      "https://google.com",
      "https://facebook.com",
      "https://google.com",
      "https://google.com",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
    url: [
      "https://google.com",
      "https://facebook.com",
      "https://google.com",
      "https://google.com",
    ],
  },
];

function MembershipContent() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [organization, setOrganization] = useState("");
const [role, setRole] = useState("");
const navigate = useNavigate();

const register = () => {
  if (!fname) alert("Please enter name");
  registerWithEmailAndPassword(fname, lname, email, role, organization, password);
  navigate("/")
};

  return (
    <React.Fragment style={{ padding: "3%" }}>
      <ScrollToTopOnMount />
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
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
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h6"
          variant="h6"
          align="center"
          color="text.primary"
          gutterBottom
        >
          JOIN THE COMMUNITY
        </Typography>
      </Container>
      <Grid sx={{ flexGrow: 1 }} container spacing={12}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={12}>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1630090896228-88e5ea707294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxkZXZlbG9wZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="economy"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Member
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A member is an individual or entity interested in the practices and outcomes of the Accelerated Software Development Life Cycle(ASDLC) outlined by ASDI contributors. You will receive community and life cycle updates.
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="economy"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Contributor
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A contributor is an active ASDI member advancing the
                      intiative with divine insight into the field of Software
                      Engineering, constructing and examining accelerated
                      approaches for an Accelerated Software Development Life
                      Cycle.
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
    
          </Grid>
        </Grid>
      </Grid>
      {/* <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        </Container> */}
        <div style={{textAlign: 'center', marginTop: '3%'}}>
        <img src={logo} style={{width: '300px', height: 'auto', justifyContent: 'center'}} />
        </div>
      <Container
        disableGutters
        maxWidth="m"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
             <Grid container spacing={2} style={{ marginBottom: "3%", textAlign: 'center' }}>
            <Grid item xs={12} sm={12}>
        <Typography
          color="text.secondary"
          variant="h5"
          component="div"
          style={{ marginLeft: '8%', marginRight: '8%' }}
        >
  
          Looking to stay up to date or contribute to the framework?<br /><br /> ASDI is
          building a community of passionate advocates, engineers and managers
          that support accelerated software development life cycles. If this is you, we'd love to have you on board!
         
        </Typography>
        </Grid>
        </Grid>
        <div style={{ marginLeft: '8%', marginRight: '8%' }} >
        <Grid container spacing={2} style={{ marginBottom: "3%" }}>
            <Grid item xs={12} sm={6}>
          <TextField 
          fullWidth 
          required
          label="First Name" 
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <br />
          <TextField 
          fullWidth 
          required
          label="Last Name" 
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            required
            label="Account Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <br />
          <br />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField 
          fullWidth 
          required
          label="Employer" 
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          />
          <br />
          <br />
          <FormControl variant="outlined" fullWidth required>
          <InputLabel id="demo-simple-select-standard-label">Interest</InputLabel>
          <Select
          fullWidth 
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
          label="Role"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Member">Member</MenuItem>
          <MenuItem value="Contributor">Contributor</MenuItem>
        </Select>
        </FormControl>
          <br />
          <br />
          <TextField 
          fullWidth 
          required
          type="password"
          label="Account Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
          variant="outlined" 
          type="submit"
          style={{marginTop: '3%'}}
          onClick={register}
          >
            Register With ASDI
          </Button>
          </Grid>
          <br />
          <br />
          
          </Grid>
       </div>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end"></Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default function Membership() {
  return <MembershipContent />;
}
