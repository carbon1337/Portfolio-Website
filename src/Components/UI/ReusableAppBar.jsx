import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  AppBar,
  Container,
  useScrollTrigger,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  Link as ScrollLink,
  animateScroll as scroll,
} from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

function ReusableAppBar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Your scroll event handlers
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 6 : 0,
    });
  }

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  };

  const menuItems = [
    { label: 'Home', to: "/" }, // Updated to use '/' for homepage
    { label: 'Gameplay', to: 'Gameplay' },
    { label: 'Description', to: 'Description' },
    { label: 'Gallery', to: 'Gallery' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <main>
      <Container maxWidth="xl">
        <ElevationScroll {...props}>
          <AppBar
            className="appbar"
            elevation={0}
            sx={{
              bgcolor: 'background.main',
              mb: 15,
            }}
          >
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                marginBlock: 1,
                mx: { xs: 5, lg: 40 },
              }}
            >

              {/* Mobile Menu */}
              <IconButton
                color="inherit"
                aria-label="open mobile menu"
                edge="end"
                onClick={toggleMobileMenu}
                sx={{ display: { lg: 'none'}, px:"10%" }}
              >
                <MenuIcon sx={{color: "text.main"}}/>
              </IconButton>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                {menuItems.map((item, index) => (
                  <ScrollLink
                    key={index}
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button onClick={item.to === '/' ? scrollToTop : closeMobileMenu}>
                      <Typography
                        variant="button"
                        sx={{
                          fontSize: { xs: '1rem', lg: '1.2rem' },
                          color: 'primary.main',
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Button>
                  </ScrollLink>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="top"
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
        sx={{color: 'primary.main'}}
      >
        <List sx={{bgcolor:'background.main'}}>
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              <ListItem button onClick={item.to === '/' ? scrollToTop : closeMobileMenu} sx={{bgcolor:'background.alt', border:2, borderColor: 'background.main'}}>
                <ListItemText primary={item.label} sx={{color:'text.main'}}/>
              </ListItem>
            </ScrollLink>
          ))}
        </List>
      </Drawer>
    </main>
  );
}

export default ReusableAppBar;
