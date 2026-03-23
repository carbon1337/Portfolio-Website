import './CSS/App.css';
import {Typography, Box, Button, Container, Grid } from '@mui/material'
import ReusableAppBar from './ReusableAppBar';
import { Element } from 'react-scroll';
import CoverImage from './Images/Dragon Thief Cover.png';
import Footer from './Footer';
import ProjectTemplate from './ProjectTemplate';
import gallery1 from './Images/ZombiesGame1.png';
import gallery2 from './Images/Dragon Thief 2.jpg';
import gallery3 from './Images/Dragon Thief 3.jpg';
import gallery4 from './Images/Dragon Thief 4.jpg';
import gallery5 from './Images/Dragon Thief 5.jpg';
import gallery6 from './Images/Dragon Thief 6.jpg';


function HuntOfTheUndead() {
  return (
    <main>
      {/*App bar*/}
      <ReusableAppBar />

      {/*Section 1: Header*/}
        <ProjectTemplate 
        CoverImageSRC={CoverImage}
        ProjectTitle="Hunt of The Undead"
        ProjectDescription="A 3D FPS round-based zombie game made for my final project in highschool."
        ProjectLink=""
        ProjectRole1="Co-Developer, Game Designer"
        ProjectTimeFrame="4 months, still in development."
        ProjectDemo=""
        Desc1="Hunt of The Undead is a FPS round-based zombies game inspired by Call of Duty zombies, and old PS1-style graphics."
        Desc2='First, we attempted to make the game an online multiplayer experience. Soon, our team realized that although we made good progress, it would be better in the long run
        to sacrifice this feature in pursuit of more content in the game.'
        Desc3=''
        Desc4='With the core mechanics added, I worked on adding in the UI scripting and sound effects. In the past, implementing sound has always been a messy process 
        for me that ends up adding lines to numerous scripts. In this project, I wanted to focus on making a sound manager that was not dependant on anything else, so I could reuse it
        in future projects. This is much alike my UI script, that has every function I would need for a GUI. In the end, it turned out great! I am very proud of the audio in the game. '
        Desc5="I would also like to thank Eli for creating the dungeon generation, shop, and player inventory system. With our development combined together, we
        made a great team and got a lot done in a short time."
        Gallery1={gallery1}
        Gallery2={gallery2}
        Gallery3={gallery3}
        Gallery4={gallery4}
        Gallery5={gallery5}
        Gallery6={gallery6}
        />

      {/*Section 3: About Me*/}

      {/*Section 4: Contact Me*/}
      <Element name='contact'>
        <div>
          <Footer />
        </div>
      </Element>
    </main>
  );
}

export default HuntOfTheUndead;
