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

function BlogPost4Content() {
  const disqusShortname = "https-accelerated-space";
  const disqusConfig = {
    url: "https://accelerated.space/",
    identifier: "2",
    title: "ASD's Impact Inside Business",
  };
  return (
    <React.Fragment style={{ padding: "3%" }}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <ScrollToTopOnMount />
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
            src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
            alt="paperwork"
            />
          <br />
          <h6>
            ASD's Impact Inside Business
            <br />
            ASDI Community Member
            <br />
            Feb 11, 2022
          </h6>
          <br />
          A Desire for Acceleration
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          Innovative business leaders are constantly finding ways to implement new and modern processes 
          into their daily operations.  To effectively do this they must understand the impact software 
          can have on their potential business expansion and financial growth.  Specifically, in today’s 
          world with the various ways to utilize software, business leaders need to understand how 
          accelerated software development can fill these roles within their business.  This is especially 
          important based on business leaders looking for software to be developed within an accelerated 
          time frame to meet the growing needs of their employees and customers.
          <br />
          Employment, wages, as well as research and development are areas directly impacted through 
          accelerated software development.  Over three million jobs, solely related to software, have 
          been created within the past few years because of its high-demand.  Research and development 
          sectors receive constant funding to reach new breakthroughs in technological improvements, which 
          help companies maintain operations and develop in new ways.  This leads to the wages of software 
          developers to typically be higher on average, compared to most occupations within the United 
          States, because of the important problems they solve.  
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
            Software Benefiting the Business
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          Here are four ways where accelerated software development can positively impact a business’s 
          operations and development:
          <br />
          <br />
          <h3>Prospect Follow-Ups</h3>
          Sales professionals are able to quickly, and more efficiently, follow-up with their prospects 
          and existing customers.  This can lead to more effective processes for lead-generation, client 
          onboarding, and client check-ins.  Users can track current routes, scheduled deliveries, 
          production progress, and other types of data revolving around their business’s performance too.
          <br />
          <br />
          <h3>Maintaining and Creating Client Relationships</h3>
          Software can empower business professionals to track how customers find their business, which 
          allows leaders to focus on those successful routes more.  Software can help us gain a better 
          understanding of what content and resources users engage the most with.  This leads to 
          understanding which website content, for example, drives user engagement, resulting in a more 
          satisfied user experience. 
          <br />
          <br />
          <img
            width="100%"
            height="auto"
            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?cs=srgb&dl=pexels-pixabay-270408.jpg&fm=jpg"
            alt="sign-up"/>
          <h3>Quote and Invoice Generation</h3>
          Software development has positively impacted the development of business practices in the 
          long-run.  A majority of the paperwork in the past has been, and continues to be, reduced and 
          stored as digital documents.  Furthermore, software allows for more modern ways to complete this 
          documentation efficiently.  Marketing material, such as email campaigns, can be composed quickly 
          and sent to a range of prospects and existing clients on a set schedule.   

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
         Success Leaves Clues to Follow
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          Software continues to be one of the leading factors in business development and success.  With 
          software in high-demand to be developed at an accelerated rate, business leaders are turning to 
          those who aim to have innovative, relevant software products developed and made accessible to 
          them.  Contrarily, those who choose to neglect the innovations and performance improvements 
          software offers will find themselves struggling to make the changes and impact they desire.

        </Typography>
        <br />
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
            {/* <a
              href="https://disqus.com"
              target="_BLANK"
              style={{ color: "black" }}
            >
              DISQUS
            </a> */}
            <br />
            <br />
            {/* <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
              style={{ marginTop: "6%" }}
            /> */}
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

export default function BlogPost4() {
  return <BlogPost4Content />;
}