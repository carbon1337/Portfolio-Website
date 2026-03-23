import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, Grid, Box } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import ProjectButton from '../UI/ProjectButton';

import movemint from '../../Assets/Images/movemint logo.png';
import DragonThief from '../../Assets/Images/Dragon Thief Thumbnail.png';
import TakinSouls from '../../Assets/Images/takin souls logo.png';
import BuffBee from '../../Assets/Images/grah.png';

const ProjectCarousel = ({ handleSetActive }) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0',

        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

  return (
    <Container maxWidth='60%'>
      <Slider {...settings}>
        <div>
          <Box className='project-container' sx={{px: 1,}}>
            <ScrollLink
              activeClass="active" 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-175} 
              duration={0} 
              onSetActive={handleSetActive}
            >
              <ProjectButton 
                ProjectLink= "./Movemint"
                ProjectTitle = "moveMINT"
                ProjectDesc = "A short and sweet 2D Platformer focused on movement mechanics."
                ProjectImageSRC = {movemint}
              />
            </ScrollLink>
          </Box>
        </div>
        <div>
          <Box className='project-container' sx={{px: 1,}}>
            <ScrollLink
              activeClass="active" 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-175} 
              duration={0} 
              onSetActive={handleSetActive}
            >
              <ProjectButton 
                ProjectLink= "./DragonThief"
                ProjectTitle = "The Dragon Thief"
                ProjectDesc ="A Top-Down Roguelike Dungeon-Crawler made for MiniJam151: Dragons"
                ProjectImageSRC = {DragonThief}
              />
            </ScrollLink>
          </Box>
        </div>
        <div>
          <Box className='project-container' sx={{px: 1,}}>
            <ScrollLink
              activeClass="active" 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-175} 
              duration={0} 
              onSetActive={handleSetActive}
            >
              <ProjectButton 
                ProjectLink= "./TakinSouls"
                ProjectTitle = "Takin' Souls"
                ProjectDesc = 'An endless running game inspired by legendary endurance athlete David Goggins.'
                ProjectImageSRC = {TakinSouls}
              />
            </ScrollLink>
          </Box>
        </div>
        <div>
          <Box className='project-container' sx={{px: 1,}}>
            <ScrollLink
              activeClass="active" 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-175} 
              duration={0} 
              onSetActive={handleSetActive}
            >
              <ProjectButton 
                ProjectLink= "./BuffBee"
                ProjectTitle = "Buff Bee"
                ProjectImageSRC = {BuffBee}
                ProjectDesc = "A 3D Platformer made for PegJam 2024."
              />
            </ScrollLink>
          </Box>
        </div>
        
        {/* Add more carousel items here */}
      </Slider>
    </Container>
  );
};

export default ProjectCarousel;