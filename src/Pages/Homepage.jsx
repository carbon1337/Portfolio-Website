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
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import props from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import Footer from '../Components/Layout/Footer';
import ProjectButton from '../Components/UI/ProjectButton';
import ProjectCarousel from '../Components/Projects/ProjectCarousel';

// Images
import tree from '../Assets/Images/tree background.png';
import AboutImage from '../Assets/Images/pfp2.png';
import movemint from '../Assets/Images/movemint logo.png';
import codingsnippets from '../Assets/Images/coding snippets.png';
import DragonThief from '../Assets/Images/Dragon Thief Thumbnail.png';
import itch from '../Assets/Images/itch.jpg';
import youtube from '../Assets/Images/youtube.png';
import github from '../Assets/Images/github.webp';
import ZombiesThumbnail from '../Assets/Images/ZombiesGame1.png';

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

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'Projects', to: 'projects' },
    { label: 'About Me', to: 'about' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <main>
      {/*App bar*/}
      <Container maxWidth="xl">
        <ElevationScroll {...props}>
          <AppBar className="appbar" elevation={0} sx={{ bgcolor: 'background.main', mb: 15 }}>
            <Toolbar sx={{ justifyContent: 'space-between', marginBlock: 1, mx: { xs: 5, lg: 40 } }}>
              {/* Name */}
              <Link to="/">
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.5rem', lg: '2rem' },
                      color: 'primary.main',
                    }}
                  >
                    Riley Clarke
                  </Typography>
                </Box>
              </Link>

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
                    <Link to='/'>
                      <Button
                        sx={{
                          '&:hover': {
                            backgroundColor: 'primary.light',
                          },
                        }}
                      >
                        <Typography
                          variant='button'
                          sx={{
                            fontSize: { xs: '1rem', lg: '1.2rem' },
                            color: 'primary.main',
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Button>
                    </Link>
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
              onSetActive={handleSetActive}
            >
              <ListItem button onClick={closeMobileMenu} sx={{borderColor:'background.main', bgcolor:'background.alt',  border:2}}>
                <ListItemText primary={item.label} sx={{color:'text.main'}} />
              </ListItem>
            </ScrollLink>
          ))}
        </List>
      </Drawer>

      {/*Section 1: Home*/}
      <Element name='home'>
        <Box sx={{width:'100%', height: 'auto', mt: 20, bgcolor: 'background.main', textAlign:'center'}}>
          <Typography variant ='h5' sx={{color: 'text.alt'}}>
            RILEY CLARKE
          </Typography>
          <Container justifyContent='center'>

          </Container>
          <Typography variant ='h3' sx={{color: 'text.main', mb:1}}>
            Game Developer
          </Typography>

          <Box className='centered' sx={{borderTop: 5, borderColor: 'primary.main', mt: 2, maxWidth: 450, width: 'auto'}} />

          <Container>
            <Typography variant ='h6' sx={{color: 'text.alt', mt:3}}>
              For the past 3 years, I've been developing projects in Unity, primarily as a Game Designer and Programmer. 
            </Typography>
            <Typography variant ='h6' sx={{color: 'text.alt'}}>
              I am consistantly driven to learn new concepts and expand my skillset.
            </Typography>
            <Container>
              <div className='centered-container'>
                <Box sx={{width:'80%', borderRadius:3, maxHeight:500, height: 'auto', mt: 15, mb:10, py: 5, bgcolor:'background.alt'}}>
                    <Typography variant ='h6' sx={{color: 'text.alt', py:2}}>
                      Useful Links:
                    </Typography>
                  <div className='centered-container'>
                    <div>

                    <Grid className='centered-container' container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Box sx={{height:125, mx: 2, borderRadius:3, bgcolor:'background.alt', width:200, overflow: 'hidden'}}>
                          <a href='https://carbonwastaken.itch.io/' target="_blank" rel="noopener noreferrer"><img src={itch}className='contact-image'></img></a>
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Box sx={{height:125, mx: 2, borderRadius:3, bgcolor:'background.alt', width:200, overflow: 'hidden'}}>
                            <a href='https://www.youtube.com/channel/UCgrywDMG1hTRvezDdgQBJAQ' target="_blank" rel="noopener noreferrer"><img src={youtube}className='contact-image'></img></a>
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Box sx={{height:125, mx: 2, borderRadius:3, bgcolor:'background.alt', width:200, overflow: 'hidden'}}>
                            <a href='https://github.com/carbon1337' target="_blank" rel="noopener noreferrer"><img src={github}className='contact-image'></img></a>
                        </Box>
                      </Grid>
                    </Grid>
                    </div>
                  </div>
                </Box>
              </div>
            </Container>
          </Container>
        </Box>
      </Element>

      <Element name='projects'>
      {/*Section 2: Projects*/}
      <Box sx={{width:'100%', height: 'auto', bgcolor: 'background.alt', textAlign:'center'}}>
        <Typography variant ='h3' sx={{color: 'text.main', pt: 10,}}>
          Projects
        </Typography>
        <Box className='centered' sx={{borderTop: 2.5, borderColor: 'primary.main', mt: 2, width: 'auto', maxWidth: 400, pb: 10}} />
        <Container sx={{maxwidth: '75%', pb: 8}}>
          <ProjectCarousel />
        </Container>
      </Box>
      </Element>

      {/*Section 3: About Me*/}
      <Element name='about'>
      <Box sx={{width:'100%', width:'auto', height:'auto', minHeight: 900, bgcolor: 'background.main', textAlign:'center', p:3}}>
        <Typography variant ='h3' sx={{color: 'text.main', pt: 10,}}>
          About Me
        </Typography>
        <Box className='centered' sx={{borderTop: 2.5, borderColor: 'primary.main', mt: 1, width: 'auto', maxWidth: 400, pb: 5}} />

        <Container maxWidth='md'>
            <Grid justifyContent='center' container spacing={4} sx={{my:3}}>
              <Grid item xs={12} md={5}>
                <Box sx={{maxWidth: {xs:'90%', md:'100%'}, width:'auto', borderRadius:3, height:'auto', bgcolor:'background.alt', overflow:'hidden'}}>
                  <div className='centered-container'>

                  <img className='about-image' src={AboutImage}></img>
                  </div>
                </Box>
                <Box sx={{maxWidth: {xs:'90%', md:'100%'}, width:'auto', borderRadius:3, mt:2.5, height: 'auto', minHeight:175, bgcolor:'background.alt', overflow:'hidden'}}>
                  <div className='centered-container'>
                    <Typography sx={{px:3, py:2, color: 'text.main'}}>
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
                <Box sx={{maxWidth: {xs:'90%', md:'100%'}, width:'auto', height:'auto', borderRadius:3, minHeight:600, bgcolor:'background.alt', textAlign: 'left'}}>
                  <Typography sx={{px:3, py:2, color: 'text.main'}}>
                    Hello! I'm Riley Clarke, a 17 year old Game Developer based in Winnipeg, Canada.
                  </Typography>

                  <Typography sx={{px:3, pb:2, color: 'text.main'}}>
                    I am currently attending my senior year of high school, majoring in Interactive Digital Media.
                    While in the IDM course, I've gained experience developing games both in small teams and working solo.
                  </Typography>

                  <Typography sx={{px:3, pb:2, color: 'text.main'}}>
                    To go with my developing, I've picked up some skills to aid my game design process. I've studied graphic design, music production, and sound design.
                    My dream is to one day combine all of my skills to create a game solely by myself.
                  </Typography>

                  <Typography sx={{px:3, pb:2, color: 'text.main'}}>
                    I am always interested in expanding my skillset, and learning new techniques.
                    Recently, I've been participating in game jams to sharpen my skills in coding and design.
                  </Typography>

                  <Typography sx={{px:3, pb:2, color: 'text.main'}}>
                   As a kid I always loved videogames. I got my first computer when I was 10 years old and have been playing ever since.
                   To be able to contribute to what was a huge portion of my childhood is a huge passion for me.
                  </Typography>

                  <Typography sx={{px:3, pb:2, color: 'text.main'}}>
                    I hope that one day a game that I make inspires other kids the same way that I was.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
      </Box>
      </Element>

      {/*Section 4: Contact Me*/}
      <Element name='contact'>
        <Footer />
      </Element>

    </main>
  );
}

export default App;
