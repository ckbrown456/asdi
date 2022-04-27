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

function BlogPost3Content() {
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
            src="https://images.pexels.com/photos/269129/pexels-photo-269129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="remote"
            />
          <br />
          <h6>
            Covid Effecting Accelerated Development
            <br />
            ASDI Community Member
            <br />
            Feb 2, 2022
          </h6>
          <br />
          Sink or Swim
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          This year has shown us a glimmer of light by our employers allowing us to gradually 
          return to the office, or at least some of them have.  Many companies are now operating 
          through a hybrid method: working in person and/or at home since they have found the 
          majority of their business’s needs can be accomplished remotely.  Companies outside of 
          the software industries have undergone a digital integration of technology through 
          various aspects of their businesses.  Changes in how they deliver services and products 
          to their customers, process consumer data, and organize their internal structures have 
          been adjusted for the new era we are experiencing.  These changes have been done with 
          the intent to generate enough revenue to remain relevant, competitive, and operational.  
          With the need for a new and innovative technological basis, business stability and the 
          overall economy has become dependent on new technological solutions to adapt to these 
          new conditions.  With businesses offering more remote and innovative services, how are 
          the life cycles of accelerated software development going to be affected?  What about 
          the economic future?  Worldwide adaptations such as these have a global, positive, 
          impact and it’s important to understand how these can affect our economy and industry 
          in the time to come.
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
            Resistance and Development
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          A transition into this wireless lifestyle has been an ongoing endeavor since the 90’s, 
          but now almost all businesses worldwide have adopted some form of wireless lifestyle 
          during or after 2020.  Moreover, having an online presence has been a necessity in this 
          competitive world, but now it has been pushed for more than ever due to the pandemic as 
          businesses were closing left and right for lacking in this area.  This has forced businesses 
          to depend on accelerated software development even more, resulting in developers to focus 
          their time and resources on these important, numerous projects that were needed yesterday.
          <br />
          <br />
          Though there was an initial negative impact on the global economy, a demand for accelerated 
          software development services grew between late 2019 and early 2020, and continued to surge 
          throughout 2020 as low-code development platforms and automation were heavily focused on by 
          numerous industries.  Overall, the software development industry had a resistance to COVID 
          and actually grew because of the pandemic.  Because business owners decreased manual practices 
          and implemented more strategic technology schemes, existing operations were refined and surprise 
          issues were able to be resolved more quickly because of new, software-based products and tools 
          created.  Infamous stay-at-home restrictions exemplified the importance of software-related jobs, 
          and businesses are currently predicted to depend on these services even more in the future. 
          <br />
          <br />
          Overall productivity was observed to have increased along-side the demand for software development 
          professionals.  Stay-at-home measures generally showed a positive influence on focus and productivity, 
          positive customer relationships were increased, and general consumer activity grew to reflect the 
          quickly-developed software products meeting and exceeding the rise of new customer needs.  Various 
          companies were seen to spend even more on digital advertising due to the pandemic, something we can 
          all expect to continue to see at some degree in the future.  Industries such as AR and VR are now 
          projected to provide a large boost to the GDP by the trillions, and other industries such as healthcare 
          and automotive are pursuing new streams of income to further their developing services and technologies. 

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
            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <br />
          <br />
          An Optimistic Foresight 
        </Typography>
        <Typography
          variant="p"
          align="left"
          color="text.secondary"
          component="p"
          style={{ padding: "4%" }}
        >
          Though there were obvious caveats to the forced-adjustments we went through, the output 
          of these altered environments has given us many positive aftereffects.  Remote work has 
          made collaborations and projects more focused and time efficient.  Many organizations are 
          predicted to keep their remote, or semi-remote, working methods in effect to support the 
          safety of their employees, as well as to maintain the positive conditions they have been 
          experiencing.   Because of the increased amount of customer requests, a greater need for 
          accelerated software development, and an overall increase in digitized spending, the 
          software industry is forecasted to be very prolific in regards to providing real solutions 
          as well as economic support.  

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

export default function BlogPost3() {
  return <BlogPost3Content />;
}
