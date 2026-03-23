import './CSS/App.css';
import {Typography, Box, Button, Container, Grid } from '@mui/material'
import ReusableAppBar from './ReusableAppBar';
import { Element } from 'react-scroll';
import CoverImage from './Images/Dragon Thief Cover.png';
import Footer from './Footer';
import ProjectTemplate from './ProjectTemplate';
import gallery1 from './Images/Dragon Thief 1.jpg';
import gallery2 from './Images/Dragon Thief 2.jpg';
import gallery3 from './Images/Dragon Thief 3.jpg';
import gallery4 from './Images/Dragon Thief 4.jpg';
import gallery5 from './Images/Dragon Thief 5.jpg';
import gallery6 from './Images/Dragon Thief 6.jpg';


function DragonThief() {
  return (
    <main>
      {/*App bar*/}
      <ReusableAppBar />

      {/*Section 1: Header*/}
        <ProjectTemplate 
        CoverImageSRC={CoverImage}
        ProjectTitle="The Dragon Thief"
        ProjectDescription="A Top-Down Roguelike dungeon crawler made for MiniJam151: Dragons"
        ProjectLink="https://carbonwastaken.itch.io/the-dragon-thief"
        ProjectRole1="Co-Developer, Game Designer"
        ProjectTimeFrame="72 Hours"
        ProjectDemo="https://www.youtube.com/embed/Wy2GrS3enoI?si=7U66mKbePMjcNcau"
        Desc1="The Dragon Thief is a top-down roguelike dungeon crawler game that was made for MiniJam151: Dragons. It was made in collaboration with 
        a fellow developer and friend, Eli."
        Desc2='The limitation for this game jam ended up being "endless greed". We thought up ideas for games that contained elements of both
        greed and dragons and ended up going with a dungeon crawler roguelike where you stole loot from dragons and hoarded it in your cave.'
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

export default DragonThief;
