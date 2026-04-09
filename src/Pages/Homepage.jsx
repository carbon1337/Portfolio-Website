import '../Styles/App.css';
import React, { useState, useEffect } from 'react';

import {
  Typography,
  Box,
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element, Events, scrollSpy } from 'react-scroll';

import Footer from '../Components/Layout/Footer';
import ProjectCarousel from '../Components/Layout/ProjectCarousel';

// Images
import HeroGif from '../Assets/Gifs/Projects.gif';

import movemint from '../Assets/Images/movemint logo.png';
import DragonThief from '../Assets/Images/Dragon Thief Thumbnail.png';
import TakinSouls from '../Assets/Images/takin souls logo.png';
import BuffBee from '../Assets/Images/grah.png';
import SevenDeadlySpins from '../Assets/Images/SevenDeadlySpins.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
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

  const personalProjects = [
    {
      title: 'While They Sleep',
      desc: 'A 3D horror game originally made for PegJam 2026. Still in development.',
      image: movemint,
      link: './WhileTheySleep',
    },
    {
      title: 'moveMINT',
      desc: 'A short and sweet 2D Platformer focused on movement mechanics.',
      image: movemint,
      link: './Movemint',
    },
    {
      title: 'HuntOfTheUndead',
      desc: 'A FPS wave-based zombies game inspired by Call Of Duty. Created as my capstone project for KEC IDM program.',
      image: movemint,
      link: './HuntOfTheUndead',
    },
  ];

  const gameJamProjects = [
    {
      title: 'Seven Deadly Spins',
      desc: 'A gambling-themed FPS game created for PegJam2025 in collaboration with Eli Hienrichs.',
      image: SevenDeadlySpins,
      link: './SevenDeadlySpins',
    },
    {
      title: 'The Dragon Thief',
      desc: 'A Top-Down Roguelike Dungeon-Crawler made for MiniJam151: Dragons',
      image: DragonThief,
      link: './DragonThief',
    },
    {
      title: "Takin' Souls",
      desc: 'An endless running game inspired by legendary endurance athlete David Goggins.',
      image: TakinSouls,
      link: './TakinSouls',
    },
    {
      title: 'Buff Bee',
      desc: 'A 3D Platformer made for PegJam 2024.',
      image: BuffBee,
      link: './BuffBee',
    },
  ];

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
    { label: 'About Me', to: 'about' },
  ];

  const navButtonSx = {
    typography: 'h6',
    textTransform: 'none',
    fontWeight: 500,
    letterSpacing: '0.4px',
    minWidth: 'auto',
    px: 1.5,
    position: 'relative',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.06)',
      color: 'text.main',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 6,
      height: '2px',
      backgroundColor: 'currentColor',
      transform: 'scaleX(0)',
      transformOrigin: 'center',
      transition: 'transform 0.28s ease',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
    },
  };

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
      {/* App Bar */}
      <Container maxWidth="xl" disableGutters sx={{ overflowX: 'hidden' }}>
        <ElevationScroll>
          <AppBar
            className="appbar"
            elevation={0}
            sx={{
              bgcolor: 'background.main',
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
              <Box
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                {menuItems.map((item, index) =>
                  item.label === 'About Me' ? (
                    <Button
                      key={index}
                      component={RouterLink}
                      to="/AboutMe"
                      onClick={() => window.scrollTo(0, 0)}
                      sx={{
                        ...navButtonSx,
                        color: 'text.link',
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <ScrollLink
                      key={index}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-85}
                      duration={800}
                      onSetActive={handleSetActive}
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <Button
                        sx={{
                          ...navButtonSx,
                          backgroundColor:
                            activeSection === item.to
                              ? 'rgba(255,255,255,0.08)'
                              : 'transparent',
                          color:
                            activeSection === item.to
                              ? 'text.main'
                              : 'text.link',
                        }}
                      >
                        {item.label}
                      </Button>
                    </ScrollLink>
                  )
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="top" open={isMobileMenuOpen} onClose={closeMobileMenu}>
        <List sx={{ bgcolor: 'background.main' }}>
          {menuItems.map((item, index) =>
            item.label === 'About Me' ? (
              <ListItem
                key={index}
                button
                component={RouterLink}
                to="/AboutMe"
                onClick={() => {
                  closeMobileMenu();
                  window.scrollTo(0, 0);
                }}
                sx={{
                  borderColor: 'background.main',
                  bgcolor: 'background.alt',
                  border: 2,
                  boxSizing: 'border-box',
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      color: 'text.main',
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ) : (
              <ScrollLink
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-85}
                duration={800}
                onSetActive={handleSetActive}
                onClick={closeMobileMenu}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <ListItem
                  button
                  sx={{
                    borderColor: 'background.main',
                    bgcolor:
                      activeSection === item.to
                        ? 'rgba(255,255,255,0.08)'
                        : 'background.alt',
                    border: 2,
                    boxSizing: 'border-box',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        color:
                          activeSection === item.to
                            ? 'text.main'
                            : 'text.link',
                        fontWeight: 500,
                      },
                    }}
                  />
                </ListItem>
              </ScrollLink>
            )
          )}
        </List>
      </Drawer>

      {/* Section 1: Home */}
      <Element name="home">
        <Box
          component="section"
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: { xs: 720, md: 840 },
            mt: 10,
            overflow: 'hidden',
            bgcolor: 'background.main',
          }}
        >
          {/* Hero GIF */}
          <Box
            component="img"
            src={HeroGif}
            alt="Hero background"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.2,
              pointerEvents: 'none',
              userSelect: 'none',
              filter: 'blur(8px)',
            }}
          />

          {/* Dark overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0, 0, 0, 0.12)',
              pointerEvents: 'none',
            }}
          />

          {/* Fade into background */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `
                radial-gradient(
                  ellipse 110% 70% at 50% 18%,
                  rgba(18, 17, 22, 0) 0%,
                  rgba(18, 17, 22, 0.06) 28%,
                  rgba(18, 17, 22, 0.18) 45%,
                  rgba(18, 17, 22, 0.42) 62%,
                  rgba(18, 17, 22, 0.78) 80%,
                  #121116 100%
                )
              `,
            }}
          />

          {/* Hero Content */}
          <Container
            maxWidth="md"
            sx={{
              position: 'relative',
              zIndex: 1,
              minHeight: { xs: 520, md: 640 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              px: { xs: 3, sm: 5, md: 8 },
              pb: { xs: 10, md: 0 },
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 720 }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'text.main',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  mb: 2,
                }}
              >
                Riley Clarke
              </Typography>

              <Typography
                variant="h5"
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
                  fontSize: { xs: '1rem', md: '1.35rem' },
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                I’m a Unity developer from Winnipeg focused on building immersive
                gameplay systems, player interaction, and experiences that feel
                memorable to play.
              </Typography>

              <Typography
                sx={{
                  color: 'text.alt',
                  fontSize: { xs: '1rem', md: '1.35rem' },
                  lineHeight: 1.8,
                  mb: 5,
                }}
              >
                I’m especially interested in the small details that make games
                feel great through movement, feedback, tension, atmosphere, and
                polish.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1.25,
                  flexWrap: 'wrap',
                  color: 'text.alt',
                  fontSize: '0.95rem',
                }}
              >
                <MuiLink
                  href="https://github.com/carbon1337"
                  target="_blank"
                  rel="noreferrer"
                  underline="none"
                  sx={socialLinkSx}
                >
                  <Typography variant="h6" component="span">
                    GitHub
                  </Typography>
                </MuiLink>

                <Typography component="span" sx={{ color: 'text.alt' }}>
                  ·
                </Typography>

                <MuiLink
                  href="https://rileyclarke.itch.io"
                  target="_blank"
                  rel="noreferrer"
                  underline="none"
                  sx={socialLinkSx}
                >
                  <Typography variant="h6" component="span">
                    Itch.io
                  </Typography>
                </MuiLink>

                <Typography component="span" sx={{ color: 'text.alt' }}>
                  ·
                </Typography>

                <MuiLink
                  href="mailto:24clarkr@gmail.com"
                  underline="none"
                  sx={socialLinkSx}
                >
                  <Typography variant="h6" component="span">
                    Email
                  </Typography>
                </MuiLink>
              </Box>
            </Box>
          </Container>
        </Box>
      </Element>

      {/* Section 2: Projects */}
      <Element name="projects">
        <Box
          sx={{
            width: '100%',
            bgcolor: 'background.main',
            boxSizing: 'border-box',
            overflowX: 'hidden',
            py: 10,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1400px',
              mx: 'auto',
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontWeight: 800,
                mb: 1,
                textAlign: 'left',
              }}
            >
              Projects
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                mb: 6,
                textAlign: 'left',
                maxWidth: '800px',
              }}
            >
              A collection of polished personal work and fast-paced game jam
              projects.
            </Typography>

            <ProjectCarousel
              title="Personal Projects"
              projects={personalProjects}
            />

            <ProjectCarousel
              title="Game Jam Games"
              projects={gameJamProjects}
            />
          </Box>
        </Box>
      </Element>

      {/* Section 4: Contact */}
      <Element name="contact">
        <Footer />
      </Element>
    </main>
  );
}

export default App;