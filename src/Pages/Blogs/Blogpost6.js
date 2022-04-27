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
import Disqus from "disqus-react";
import { useEffect } from 'react';

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

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  
  }
  

function BlogPost6Content() {
  const disqusShortname = "https-accelerated-space"
  const disqusConfig = {
    url: "https://accelerated.space/",
    identifier: "1",
    title: "Accelerated Software Development to Come"
  }
  
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
            src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <br />
          <h6>
        The Future of Software Development<br />
        ASDI Community Member<br />
        Jan 15, 2022
          
        </h6>
          <br />
          Software's Impact Today
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          It might be easy for most of us to not truly understand the power software has 
          developed throughout its existence.  Using our smartphone to connect with someone 
          new on LinkedIn, color correcting a highly-detailed photo, or communicating with 
          a team member over a shareable document might seem like simple tasks our portable 
          computers are able to handle.   In reality, these are relatively simple tasks for 
          our devices.  However, the fact that the software powering something like an iPhone 
          has more processing power than the software used to launch the Apollo 11 spacecraft 
          is amazing.  Software innovation has accelerated in a relatively short amount of 
          time.
          <br />
          <br />
          Our digital world is becoming more accessible to a larger group of people now.  Global 
          satellite coverage for the 5G network is expanding.  This is anticipated to give an 
          estimated four-billion people access to a high-speed Internet connection.  These newly-
          opened doors of opportunity are also expected to bring their unique and varivarried 
          economic effects.  This software innovation can be thought of negatively since it brings 
          the risk of people losing their jobs due to improved efficiencies, but the reality is 
          there will be new jobs created from people using technology to operate on top a stronger 
          foundation.
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
          The Challenge
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
         This software transition has not been fluid for everyone, specifically for 
         traditional businesses and lifestyles.  Business leaders realize their traditional 
         companies need to adapt into software companies if they hope to thrive.  Today’s 
         software is commonly developed at an accelerated level, typically being composed of 
         dense volumes of code.  Making certain these millions lines of code are not only 
         correct and functioning properly, but secured and safe from being accessed from unwanted 
         parties, is more paramount today than it was ten years ago.
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
          Our Current Solutions
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          In order to meet the speed and security software development demands, developers 
          and leaders have turned their eyes to open source and cloud-based hosting.  These 
          hosting solutions decrease the amount of time required for companies or individuals 
          to create and develop software projects since the files are basically made available 
          to those with an Internet connection.  Development speeds have been accelerated so 
          much that some projects begin and conclude over a weekend, ultimately giving anyone 
          the ability to develop software at an accelerated pace. 
            <br /><br /> 
        The potential of technological progression contained
        within software development is auspicious in regards to refining our
        production efficiency and overall innovative efforts towards a more
        established and developed futureAutomation has proved to be another solution to the 
        time and security demands software development comes with.  Aside from the obvious speed 
        improvements, automation is commonly used to reduce the potential for human error.  When 
        reviewing a new digital product, automation is used during software testing.  This 
        decreases the amount of human time required to validate and acquire new data and statistics 
        so more of that time can be spent on actual development.
        <br /><br />
        Exciting services like machine learning and artificial intelligence are continually being 
        implemented into software development tools as well.  These offer abilities such as real-time 
        code assessments to detect errors and defects early during the development process, saving any 
        time spent addressing these issues post-production.
        <br /><br />
        Though all of these are great solutions for speed, the overall demand for software development 
        skills are not being met as much as we would like.  Powerful resources like no-code tools are 
        being utilized to develop and test new software products, opening more doors for those wanting 
        to get into the industry.  It should be noted that no-code tools do not serve as the solution 
        we need, but surely warm-welcome assistance to a greater problem we still need to solve.
        </Typography>
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
          {/* <img src="" /> */}
          Built It
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
         “The only way you can predict the future is to build it” is a famous quote by 
         computer scientist Alan Kay, and it connects very well to accelerated software 
         development and its exciting future.  Software is developing at a relatively fast 
         rate and this industry never seems to be stagnant; software trends grow and morph 
         yearly now.  The technological revolution we have been waiting for is happening 
         right now.  Opportunities to use accelerated software development to create powerful 
         tools and products occur daily; it is our responsibility to not only take advantage 
         of these moments, but to make sure our work is developed in a timely manner, and meets 
         the security demands our world currently has.  Utilizing modern services like open 
         source hosting, automation, and machine learning can ensure modern software development 
         not only keeps an accelerated pace but integrates nicely with the world today.
        </Typography>

        {/* </Grid> */}
      </Container>
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
                  <div style={{ marginTop: "6%", textAlign: "center" }}>
            COMMENTS DISABLED FOR THIS POST{" "}
           </div>
   
                </Box>
        {/* </Grid> */}
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default function BlogPost6() {
  return <BlogPost6Content />;
}
