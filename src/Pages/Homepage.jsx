import '../Styles/App.css';
import React, { useState, useEffect } from 'react';

import {
  Typography,
  Box,
  Button,
  Container,
  Grid,
  useScrollTrigger,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element, Events, scrollSpy } from 'react-scroll';

import Footer from '../Components/Layout/Footer';
import ProjectCarousel from '../Components/Projects/ProjectCarousel';

// Images
import AboutImage from '../Assets/Images/pfp2.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  function ElevationScroll({ children }) {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 6 : 0,
    });
  }

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'Projects', to: 'projects' },
    { label: 'About Me', to: 'about' },
    { label: 'Contact', to: 'contact' },
  ];

  const socialLinkSx = {
    position: 'relative',
    color: 'text.link',
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: 'text.main',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -2,
      width: '100%',
      height: '1px',
      backgroundColor: 'currentColor',
      transform: 'scaleX(0)',
      transformOrigin: 'center',
      transition: 'transform 0.25s ease',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
    },
  };

  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      {/* App bar */}
      <Container maxWidth="xl" disableGutters sx={{ overflowX: 'hidden' }}>
        <ElevationScroll>
          <AppBar
            className="appbar"
            elevation={0}
            sx={{
              bgcolor: 'background.main',
              mb: 15,
              width: '100%',
              left: 0,
              right: 0,
            }}
          >
            <Toolbar
              sx={{
                justifyContent: 'flex-end',
                marginBlock: 1,
                px: { xs: 2, sm: 4, lg: 10 },
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              {/* Mobile Menu */}
              <IconButton
                color="inherit"
                aria-label="open mobile menu"
                edge="end"
                onClick={toggleMobileMenu}
                sx={{ display: { lg: 'none' } }}
              >
                <MenuIcon />
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
                    onSetActive={handleSetActive}
                  >
                    <RouterLink to="/" style={{ textDecoration: 'none' }}>
                      <Button
                        sx={{
                          '&:hover': {
                            backgroundColor: 'primary.light',
                          },
                        }}
                      >
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
                    </RouterLink>
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
      >
        <List sx={{ bgcolor: 'background.main' }}>
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              onSetActive={handleSetActive}
            >
              <ListItem
                button
                onClick={closeMobileMenu}
                sx={{
                  borderColor: 'background.main',
                  bgcolor: 'background.alt',
                  border: 2,
                  boxSizing: 'border-box',
                }}
              >
                <ListItemText primary={item.label} sx={{ color: 'text.main' }} />
              </ListItem>
            </ScrollLink>
          ))}
        </List>
      </Drawer>

      {/* Section 1: Home */}
      <Element name="home">
        <Box
          sx={{
            width: '100%',
            mt: 16,
            px: { xs: 3, sm: 5, md: 8 },
            bgcolor: 'background.main',
            display: 'flex',
            justifyContent: 'center',
            boxSizing: 'border-box',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '600px',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'text.main',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Riley Clarke
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.main',
                fontWeight: 500,
                mb: 2,
              }}
            >
              Unity C# Developer | Game Designer
            </Typography>

            <Typography
              sx={{
                color: 'text.alt',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              I’m a Unity developer from Winnipeg focused on building immersive gameplay
              systems, player interaction, and experiences that feel memorable to play.
            </Typography>

            <Typography
              sx={{
                color: 'text.alt',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                mb: 5,
              }}
            >
              I’m especially interested in the small details that make games feel great
              through movement, feedback, tension, atmosphere, and polish.
            </Typography>

            <Box sx={{ mb: 6 }}>
              <Typography sx={{ color: 'text.alt', fontSize: '0.95rem' }}>
                <MuiLink
                  href="https://github.com/carbon1337"
                  target="_blank"
                  rel="noreferrer"
                  underline="none"
                  sx={socialLinkSx}
                >
                  GitHub
                </MuiLink>
                {' · '}
                <MuiLink
                  href="https://rileyclarke.itch.io"
                  target="_blank"
                  rel="noreferrer"
                  underline="none"
                  sx={socialLinkSx}
                >
                  Itch
                </MuiLink>
                {' · '}
                <MuiLink
                  href="mailto:24clarkr@gmail.com"
                  underline="none"
                  sx={socialLinkSx}
                >
                  Email
                </MuiLink>
              </Typography>
            </Box>

            <Box
              sx={{
                width: '100%',
                borderRadius: 3,
                py: 4,
                px: { xs: 2, sm: 3, md: 4 },
                bgcolor: 'background.alt',
                boxSizing: 'border-box',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'text.main',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Most Recent Project
              </Typography>

              {/* add project video */}
            </Box>
          </Box>
        </Box>
      </Element>

      <Element name="projects">
        {/* Section 2: Projects */}
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            bgcolor: 'background.alt',
            textAlign: 'center',
            boxSizing: 'border-box',
            overflowX: 'hidden',
          }}
        >
          <Typography variant="h3" sx={{ color: 'text.main', pt: 10 }}>
            Projects
          </Typography>

          <Box
            className="centered"
            sx={{
              borderTop: 2.5,
              borderColor: 'primary.main',
              mt: 2,
              width: '100%',
              maxWidth: 400,
              pb: 10,
              mx: 'auto',
              boxSizing: 'border-box',
            }}
          />

          <Container maxWidth="lg" sx={{ pb: 8, boxSizing: 'border-box' }}>
            <ProjectCarousel />
          </Container>
        </Box>
      </Element>

      {/* Section 3: About Me */}
      <Element name="about">
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            minHeight: 900,
            bgcolor: 'background.main',
            textAlign: 'center',
            p: 3,
            boxSizing: 'border-box',
            overflowX: 'hidden',
          }}
        >
          <Typography variant="h3" sx={{ color: 'text.main', pt: 10 }}>
            About Me
          </Typography>

          <Box
            className="centered"
            sx={{
              borderTop: 2.5,
              borderColor: 'primary.main',
              mt: 1,
              width: '100%',
              maxWidth: 400,
              pb: 5,
              mx: 'auto',
              boxSizing: 'border-box',
            }}
          />

          <Container maxWidth="md" sx={{ boxSizing: 'border-box' }}>
            <Grid justifyContent="center" container spacing={4} sx={{ my: 3 }}>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    width: '100%',
                    borderRadius: 3,
                    height: 'auto',
                    bgcolor: 'background.alt',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                  }}
                >
                  <div className="centered-container">
                    <img className="about-image" src={AboutImage} alt="Riley Clarke" />
                  </div>
                </Box>

                <Box
                  sx={{
                    width: '100%',
                    borderRadius: 3,
                    mt: 2.5,
                    height: 'auto',
                    minHeight: 175,
                    bgcolor: 'background.alt',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                  }}
                >
                  <div className="centered-container">
                    <Typography sx={{ px: 3, py: 2, color: 'text.main' }}>
                      My favourite games:
                      <ul>
                        <li>Elden Ring</li>
                        <li>CS:GO</li>
                        <li>Minecraft</li>
                        <li>Rust</li>
                      </ul>
                    </Typography>
                  </div>
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 3,
                    minHeight: 600,
                    bgcolor: 'background.alt',
                    textAlign: 'left',
                    boxSizing: 'border-box',
                  }}
                >
                  <Typography sx={{ px: 3, py: 2, color: 'text.main' }}>
                    Hello! I'm Riley Clarke, a 17 year old Game Developer based in Winnipeg, Canada.
                  </Typography>

                  <Typography sx={{ px: 3, pb: 2, color: 'text.main' }}>
                    I am currently attending my senior year of high school, majoring in Interactive Digital Media.
                    While in the IDM course, I've gained experience developing games both in small teams and working solo.
                  </Typography>

                  <Typography sx={{ px: 3, pb: 2, color: 'text.main' }}>
                    To go with my developing, I've picked up some skills to aid my game design process. I've studied graphic design, music production, and sound design.
                    My dream is to one day combine all of my skills to create a game solely by myself.
                  </Typography>

                  <Typography sx={{ px: 3, pb: 2, color: 'text.main' }}>
                    I am always interested in expanding my skillset, and learning new techniques.
                    Recently, I've been participating in game jams to sharpen my skills in coding and design.
                  </Typography>

                  <Typography sx={{ px: 3, pb: 2, color: 'text.main' }}>
                    As a kid I always loved videogames. I got my first computer when I was 10 years old and have been playing ever since.
                    To be able to contribute to what was a huge portion of my childhood is a huge passion for me.
                  </Typography>

                  <Typography sx={{ px: 3, pb: 2, color: 'text.main' }}>
                    I hope that one day a game that I make inspires other kids the same way that I was.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>

      {/* Section 4: Contact Me */}
      <Element name="contact">
        <Footer />
      </Element>
    </main>
  );
}

export default App;