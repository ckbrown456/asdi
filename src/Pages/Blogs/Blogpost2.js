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

function BlogPost2Content() {
  const disqusShortname = "https-accelerated-space";
  const disqusConfig = {
    url: "https://accelerated.space/",
    identifier: "2",
    title: "Accelerated Development & Contributions",
  };
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
            src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <br />
          <h6>
            Accelerated Development & Contributions
            <br />
            ASDI Community Member
            <br />
            Jan 26, 2022
          </h6>
          <br />
          Software Development Excellance
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          Accelerated software development life cycles (ASDLC’s) are the
          frameworks organizations utilize to create higher-quality applications
          within a quickened timeframe and at a more economic cost. These can
          increase the amount of project acceptances, product output, serviced
          industries, and revenue streams organizations experience within a
          given interval. These organizations need to simultaneously adopt new
          skill sets and proficiencies to optimize the technology they use to
          even consider offering their services and products. Industries such as
          retail, grocery, and automotive are still finding some projects can
          take an extended amount of months, leaving their leaders incapable of
          accurately predicting the timeline and operational scale their
          products and innovations might require. <br /><br />To achieve this quality of
          software development excellence, many organizations either directly
          hire software engineers or reach out to third-party companies. For
          these individuals and organizations to optimize their ASDLCs, a focus
          on workflow, company culture, and product management must be
          established to allow their accelerated software frameworks to assist
          in supplying their client’s income, as well as their own. How can this
          be accomplished? In many ways, however, this post will focus on how
          software is able to accomplish this. <br />
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
          Integrating Software into Established Workflows
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          An ASDLC becomes more prolific through the developer’s environment;
          the more fluid and innovative the environment, the more the
          developer’s talent is able to flourish. This goes deeper than an
          organized desk setup or impressive file management- companies with
          stronger software maturity, a focus on preparing for critical
          disruptions, and who put effort towards a more positive customer and
          cultural experience see higher amounts of shareholder returns, more
          growth, and show more innovative potential compared to those who
          suffer to push for these admirable goals. Software has given
          organizations and developers the ability to better manage their
          workflow through specific workflow management software. <br />< br />These
          prominent products enable the user to eliminate repetitive and
          redundant tasks, better identify areas that require refinement, and
          ultimately enhance their output. Features such as turning established
          processes into visuals, which assists in remembering and internalizing
          key ideas, creating back-up plans or products for when a company
          encounters significant workflow disruptions, and supplying automation
          to laborious processes are some of the ways software teams have honed
          their time in accelerated software development projects.
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
            src="https://images.pexels.com/photos/9760259/pexels-photo-9760259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <br />
          <br />
          Software Improving Production
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          Internal alterations to execute a proper ASDLC revolves around the
          developer, specifically the developer’s tools, facility organization,
          and company culture. Having a workflow management system established
          is necessary to meet these needs, especially for any time-sensitive
          accelerated development to occur. Various industries reach to software
          development companies remotely to solve their problems, hopefully to
          be achieved within a timely and cost-effective methodology. These
          projects are often needed as soon as possible and require the right
          work to be completed correctly, so implementing workflow management
          software within the company improves the rates at which this occurs.<br /><br />
          Software continues to allow companies to establish systems for when
          major work disruptions occur, increase their product output, and
          provide a positive customer and employee experience. All of this is
          part of a domino effect leading to a company’s success and revenue to
          soar and, if adopted by other companies within various industries, a
          more wealthy and fruitful global economy.
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

export default function BlogPost2() {
  return <BlogPost2Content />;
}
