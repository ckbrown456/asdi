import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Footer from '../components/Footer';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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

function BlogContent() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  return (
    <React.Fragment style={{ padding: "3%" }}>
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
        style={{ justifyContent: "center" }}
      >
       
      </Container>
      {/* End hero unit */}
{/* 
      <Container maxWidth="md" component="main"> */}
        {/* <Grid container spacing={5} alignItems="flex-end"> */}
          <Grid sx={{ flexGrow: 1 }} container spacing={12}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={12}>
                <Grid item>
                <Link to="/Blog/sd-economy" style={{color: 'black', textDecoration: 'none'}}><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://images.unsplash.com/photo-1470082719408-b2843ab5c9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
                        alt="economy"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Software Development & <br />The Economy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Definition , Impact, Reach of Software Development in today's economy<br />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                   <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card></Link>
                </Grid>
                 <Grid item>
                <Link to="/Blog/asd-economy" style={{color: 'black', textDecoration: 'none'}}><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://images.pexels.com/photos/9760259/pexels-photo-9760259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="domino-effect"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Accelerated Development & Contributions
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Excellance, Integration, Production of Software Development<br />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                   <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card></Link>
                </Grid>
               <Grid item>
                <Link to="/Blog/covid-effect" style={{color: 'black', textDecoration: 'none'}}><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://images.pexels.com/photos/269129/pexels-photo-269129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="remote"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Covid's Effect on <br />Accelerated Development
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Adaptation and Growth Leading to A Hopeful Future <br />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                   <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card></Link>
                </Grid>
                <Grid item>
                <Link to="/Blog/asd-impact" style={{color: 'black', textDecoration: 'none'}}><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?cs=srgb&dl=pexels-pixabay-270408.jpg&fm=jpg"
                        alt="remote"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          ASD's Impact Inside<br /> Businesses 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Business Leaders Utilizing the Value Software Brings <br />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                   <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card></Link>
                </Grid>
                <Grid item>
                <Link to="/Blog/tailored" style={{color: 'black', textDecoration: 'none'}}><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                        alt="remote"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Tailored Software for<br /> Specific Needs
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Investing in software to be developed on an accelerated level, based on specified needs.<br />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                   <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card></Link>
                </Grid>
                <Grid item>
                <Link to="/Blog/future" style={{color: 'black', textDecoration: 'none'}}><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="remote"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Future of Accelerated Software Development
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        How we develop software might provide clues to the future of accelerated software development.<br />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                   <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card></Link>
                  </Grid>
                {/*here*/}
              </Grid>
            </Grid>
          </Grid>
        {/* </Grid>
      </Container> */}
     <Footer />
    </React.Fragment>
  );
}

export default function Blog() {
  return <BlogContent />;
}
