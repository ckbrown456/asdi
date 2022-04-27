import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom'

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: 'white', color: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{backgroundColor: 'white', color: 'black'}}>
          <Link to="/" style={{color: 'black', textDecoration: 'none'}}><Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            ASDI
          </Typography></Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
             <Link to="/" style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleCloseNavMenu}>
              <Button color="inherit">Home</Button>
              </MenuItem></Link>
              <Link to="/About" style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleCloseNavMenu}>
              <Button color="inherit">About</Button>
              </MenuItem></Link>
              <Link to="/Specification" style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleCloseNavMenu}>
              <Button color="inherit">Specification</Button>
              </MenuItem></Link>
              <Link to="/Membership" style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleCloseNavMenu}>
              <Button color="inherit">Membership</Button>
              </MenuItem></Link>
              <Link to="/Blog" style={{color: 'black', textDecoration: 'none'}}><MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit">Blog</Button>
              </MenuItem></Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            ASDI
            {/* <img src={logo} width="75px" height="60px" /> */}
            {/* ASDI */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

            
 
                <Link to ='/About' style={{ textDecoration: 'none'}}><Button color="inherit" style={{color: 'black'}}>About</Button></Link>
            
   
                <Link to ='/Specification' style={{ textDecoration: 'none'}}><Button color="inherit" style={{color: 'black'}}>Specification</Button></Link>
    
          
                <Link to ='/Membership' style={{ textDecoration: 'none'}}><Button color="inherit" style={{color: 'black'}}>Membership</Button></Link>
    

                <Link to ='/Blog' style={{ textDecoration: 'none'}}><Button color="inherit" style={{color: 'black'}}>Blog</Button></Link>
          

          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
                <MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit">About</Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit">Specification</Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit">Participate</Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button color="inherit">Blog</Button>
              </MenuItem>
           
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
