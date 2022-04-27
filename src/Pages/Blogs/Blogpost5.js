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
import { DiscussionEmbed } from "disqus-react";
import { CommentCount } from "disqus-react";
import { CommentEmbed } from "disqus-react";
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
function BlogPost5Content() {
  const disqusShortname = "https-accelerated-space";
  const disqusConfig = {
    url: "https://accelerated.space/",
    identifier: "2",
    title: "ASD's Impact Inside Business",
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
      </AppBar>{" "}
      <br />
      {/* Hero unit */}
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
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80 "
            alt="laptop"
            />
          <br />
          <h6>
            Tailored Software for Specific Needs
            <br />
            ASDI Community Member
            <br />
            Feb 18, 2022
          </h6>
          <br />
          Software is Industry
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          “I think a lot about computing.  It is getting embedded in our world.  Computing is a 
          core part of every industry.  A car is now a computer.  Software skills are a valuable 
          resource.”  This is a quote taken from Microsoft’s CEO Satya Nadello, one of the 
          business leaders present at the Mobile World Congress gathering in 2019.  He was 
          discussing his understanding on what companies should be doing now to be prepared for 
          the future.  Many companies have been late to adopt their own software development 
          solutions, which has led them to rely on external software consultant firms to provide 
          cookie-cutter programs.  These are weak temporary solutions, not tailored to individual 
          needs or pain points, causing the amount of differentiation between companies to 
          become blurred.  To overcome this, companies need to hire software development 
          professionals to devise accelerated solutions which are both unique and direct answers 
          to what is needed. 
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
            Finding the Solution
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          In the past, common practices of organizations in need of accelerated software 
          development solutions involved outsourcing the work to consultant firms.  Sometimes 
          training the majority of their employees to meet these new needs was preferable.  
          These methods might have worked in the past, but today this is not sufficient to 
          properly address the software demands that continue to arise.  Disruptions in the 
          digital world are continuing to occur because developing software is sometimes not 
          a part of a company’s backbone.
          <br />
          <br />
          <img
            width="100%"
            height="auto"
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 "
            alt="developers"/>
            <br />
            <br />
          Thankfully there are numerous software development tools to help make the process 
          easier.  Software development tools are programs developed for the creation and 
          support of applications or other software.  Like most products, there are free and 
          paid versions of these tools.  Codepen, GitHub, and Atom are popular examples of 
          modern developer tools anyone, even big companies, can learn to use for their own 
          projects.  To be safe, however, companies in need of software solutions should invest 
          into either individuals with a software engineering background or a company that 
          specializes in accelerated software development.  This ensures the final product will 
          be tailored to the specialized needs the company or client might have, limiting the 
          potential for wasted time and resources.
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
         The Developer’s Role
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
         When collaborating with professionals who specialize in accelerated software development,
          it is important to realize how to fully utilize their services for your company’s 
          benefit.  Software developers are valued as more than just people who throw out code 
          all day.  Developers should be involved in brainstorming sessions for potential 
          solutions to a business problem- they are the ones who know how to implement software 
          into the company’s operations.  Moreover, developers should be among the individuals 
          who speak and interact with clients.  Speaking with clients and hearing their needs 
          empowers developers to produce better solutions since they have such a resourceful one-on-one 
          interaction.  Lastly, encourage experimentation to occur throughout the software 
          development life cycle.  Experimentation leads to examination, then evaluation, and 
          finally innovation. 
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
            Utilize the Specialized
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
            <img
            width="100%"
            height="auto"
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 "
            alt="developers"
            />
            <br />
            <br />
          Companies are reaching out to software development consultant firms to respond to 
          the excessive amount of digital needs their clients demand.  However, results are 
          not always optimal and this can cause their production to suffer.  To negate the 
          amount of wasted time and resources, companies need to hire professionals focused 
          on accelerated software development made for the individual client.  Having teams 
          or groups of software developers who avoid cookie-cutter methods will address the 
          unique disruptions these companies are experiencing.  To have a successful development 
          group to rely on, business leaders must adopt a new view towards software developers. 
            Understanding when experimentation would be beneficial, encouraging client-developer 
           interpersonal communication, and having a lot of patience are three ways to make sure 
           your team operates at full capacity.  These methods give employees a better 
           understanding of the company’s mission, current goals, and what they need for 
           innovation.
          <br />
          
        </Typography>    
            <br />
        {/* </Grid> */}
      </Container>
        <Box pt={2}>
          <Grid spacing={1} container style={{ justifyContent: "center" }}>
            {["Facebook", "Reddit", "Hacker News"].map((type, index) => (
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
            ))}
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

export default function BlogPost5() {
  return <BlogPost5Content />;
}