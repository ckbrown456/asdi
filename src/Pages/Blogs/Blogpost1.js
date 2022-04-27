import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../../components/Navbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import asdlc from "../../assets/asdlc.svg";
import Footer from "../../components/Footer";
import ShareButton from "../../components/ShareButton";
import { DiscussionEmbed } from 'disqus-react';
import { CommentCount } from 'disqus-react';
import { CommentEmbed } from 'disqus-react';
import Disqus from "disqus-react"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://accelerated.space">
        ASDI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

function BlogPost1Content() {
  const disqusShortname = "https-accelerated-space"
  const disqusConfig = {
    url: "https://accelerated.space/",
    identifier: "1",
    title: "Software Development & The Economy"
  }
  
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
      </AppBar>{" "}
      <br />{/* Hero unit */}
      <Container maxWidth="md" component="main">
        <Typography
          component="h1"
          variant="h5"
          align="left"
          color="text.primary"
          gutterBottom
        >
          <img
            width="100%"
            height="auto"
            src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
          <br />
          <h6>
          Software Development & The Economy<br />
          ASDI Community Member<br />
          Jan 15, 2022
          
        </h6>
          <br />
          Impactful Development
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          In the time of this exciting digital revolution we all live in,
          software development has proven to be a chief component in our
          innovation and global production. <br />
          <br /> Software development has been one of the leading influences on
          the worldwide economy since at least the early 2000’s, delivering
          numerous jobs, technological breakthroughs, and civilization growth.
          Real empowerment is granted to the manifold of businesses who utilize
          software development for their own uses, which could be the
          differentiating factor between a company breaking even or breaking the
          bank. <br />
          <br /> Software development has become one of the most valued
          professions and vital components for a country’s development, whether
          that be health, agricultural, or technological related. Regardless of
          how influential we recognize software development to be, do we know
          what software actually is?
        </Typography>
      </Container>
      {/* End hero unit */}
      <br />
      <Container maxWidth="md" component="main">
        {/* <Grid container spacing={5} alignItems="flex-end"> */}

        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {/* <img src="" /> */}
          What Actually is Software?
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          In the time of this exciting digital revolution we all live in,
          software development has proven to be a chief component in our
          innovation and global production. <br />
          <br /> Software development has been one of the leading influences on
          the worldwide economy since at least the early 2000’s, delivering
          numerous jobs, technological breakthroughs, and civilization growth.
          Real empowerment is granted to the manifold of businesses who utilize
          software development for their own uses, which could be the
          differentiating factor between a company breaking even or breaking the
          bank. <br />
          <br /> Software development has become one of the most valued
          professions and vital components for a country’s development, whether
          that be health, agricultural, or technological related. Regardless of
          how influential we recognize software development to be, do we know
          what software actually is?
        </Typography>

        {/* </Grid> */}
      </Container>
      <br />
      <Container maxWidth="md" component="main">
        {/* <Grid container spacing={5} alignItems="flex-end"> */}

        <Typography
          component="h1"
          variant="h5"
          align="left"
          color="text.primary"
          gutterBottom
        >
          <img
            width="100%"
            height="auto"
            src="https://images.unsplash.com/photo-1470082719408-b2843ab5c9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
          />
          <br />
          <br />
          Reach
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          Because of this positive impact, a diverse collection of employment
          opportunities are created based on software development. In the US
          economy alone, software development supplied over nine hundred billion
          dollars in 2020, contributing heavily to the millions of jobs which
          comprise it. Top research and development investors, such as Apple,
          Microsoft, and Intel have turned their efforts towards a variety of
          emerging technologies, such as self-driving vehicles and artificial
          intelligence, which are already influencing the way we live and
          interact with the world today. What powers these hot topics? Software
          development.<br /><br /> The potential of technological progression contained
          within software development is auspicious in regards to refining our
          production efficiency and overall innovative efforts towards a more
          established and developed future.
        </Typography><br />
        <Box pt={2}>
                  <Grid spacing={1} container style={{justifyContent: 'center'}}>
                    {["Facebook", "Reddit", "Hacker News"].map(
                      (type, index) => (
                        <Grid item key={index}>
                          <ShareButton
                            type={type}
                            title="Software-Development-and-The-Economy"
                            description="Defintion, impact, reach of Software Development in today's economy."
                            disableElevation
                            variant="outlined"
                            className="text-white"
                            classes={{
                              label: "text-white",
                            }}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                  <div style={{marginTop: '6%', textAlign: 'center'}}>
                    COMMENTS POWERED BY <a href="https://disqus.com" target="_BLANK" style={{color: 'black'}}>DISQUS</a><br /><br />
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
          style={{marginTop: '6%'}}
        />
      </div>
                  {/* <DiscussionEmbed
    shortname='Software-Development-and-The-Economy'
    config={
        {
            url: "https://accelerated.space/Blog/sd-economy",
            identifier: "1",
            title: "Software Development & The Economy",
            language: 'en' //e.g. for Traditional Chinese (Taiwan)	
        }
    }
/> */}
{/* <CommentCount
    shortname='Software-Development-and-The-Economy'
    config={
        {
            url: "https://accelerated.space/Blog/sd-economy",
            identifier: "1",
            title: "Software Development & The Economy"
        }
    }
>
   
    Comments
</CommentCount>
<CommentEmbed
    commentId={1}
    showMedia={true}
    showParentComment={true}
    width={420}
    height={320}
/> */}
                </Box>
        {/* </Grid> */}
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default function BlogPost1() {
  return <BlogPost1Content />;
}
