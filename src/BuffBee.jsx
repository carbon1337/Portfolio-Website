import './CSS/App.css';
import {Typography, Box, Button, Container, Grid } from '@mui/material'
import ReusableAppBar from './ReusableAppBar';
import { Element } from 'react-scroll';
import CoverImage from './Images/BuffBeeScreenshot (1).png';
import Footer from './Footer';
import ProjectTemplate from './ProjectTemplate';
import gallery1 from './Images/BuffBeeScreenshot (1).png';
import gallery2 from './Images/BuffBeeScreenshot (2).png'
import gallery3 from './Images/BuffBeeScreenshot (3).png'
import gallery4 from './Images/BuffBeeScreenshot (4).png'
import gallery5 from './Images/BuffBeeScreenshot (5).png'
import gallery6 from './Images/BuffBeeScreenshot (6).png'

function BuffBee() {
  return (
    <main>
      {/*App bar*/}
      <ReusableAppBar />

      {/*Section 1: Header*/}
        <ProjectTemplate 
        CoverImageSRC={CoverImage}
        ProjectTitle="Buff Bee"
        ProjectDescription="A 3D Platformer made for the 2024 PegJam"
        ProjectLink="https://dobymick.itch.io/buff-bee"
        ProjectRole1="Co-Developer, Game Designer"
        ProjectTimeFrame="72 Hours"
        ProjectDemo="https://www.youtube.com/embed/Wy2GrS3enoI?si=7U66mKbePMjcNcau"
        Desc1="Buff Bee is a game that I helped to develop for a PegJam 2024. It was made in a a group of five. Eli and I were the programmers, Justin was the 3D artist,
        and Jorn and Rashida were the 2D artists. It was made in 3 days and ended up being presented by our group to a live audience to the rest of the participants of the game jam."
        Desc2='The theme for the jam was "The Bees"'
        Desc3='First, I got to work on the movement, combat, and enemy AI. For the movement, I took what I had already made for my other game "moveMINT"
        and edited it to work in both the X and Y axis. Then, I took advantage of the unity animation system to add the states for the enemy AI. Finally, I added simple combat and health scripts
        to both the enemies and the player to damage eachother in the attack animations.'
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

export default BuffBee;
