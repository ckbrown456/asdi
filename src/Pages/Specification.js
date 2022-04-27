import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import asdlc from "../assets/asdlc.svg";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Footer from "../components/Footer";
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
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

function SpecificationContent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        style={{ padding: "4%" }}
      >
        <img src={asdlc} width="100%" height="100%" />
        {/* <Typography
          variant="h5"
          align="center"
          color="black"
          component="p"
          style={{ padding: "4%" }}
        >
          TBD
        </Typography> */}

        <MenuList fullWidth>
          <MenuItem>
            {/* <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon> */}
            <ListItemText>ASDI Specification Phases</ListItemText>
          </MenuItem>
          <Divider />
          <Link
            to="/specification/research-and-requirements"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem fullWidth>
              {/* <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon> */}
              <ListItemText>Research & Requirements</ListItemText>
              <Typography variant="body2" color="text.secondary">
                1
              </Typography>
            </MenuItem>
          </Link>
          <Link
            to="/specification/architecture-and-design"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>
              {/* <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon> */}
              <ListItemText>Architecture & Design</ListItemText>
              <Typography variant="body2" color="text.secondary">
                2
              </Typography>
            </MenuItem>
          </Link>
          <Link
            to="/specification/construction-and-implementation"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>
              {/* <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon> */}
              <ListItemText>Construction & Implementation</ListItemText>
              <Typography variant="body2" color="text.secondary">
                3
              </Typography>
            </MenuItem>
          </Link>
          <Link
            to="/specification/quality-assurance-and-testing"
            style={{ color: "black", textDecoration: "none" }}
          >
            {" "}
            <MenuItem>
              {/* <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon> */}
              <ListItemText>QA & Testing</ListItemText>
              <Typography variant="body2" color="text.secondary">
                4
              </Typography>
            </MenuItem>
          </Link>
          <Link
            to="/specification/management"
            style={{ color: "black", textDecoration: "none" }}
          >
            {" "}
            <MenuItem>
              {/* <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon> */}
              <ListItemText>Management</ListItemText>
              <Typography variant="body2" color="text.secondary">
                5
              </Typography>
            </MenuItem>
          </Link>
        </MenuList>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end"></Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default function Specification() {
  return <SpecificationContent />;
}
