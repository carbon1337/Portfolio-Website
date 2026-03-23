import './CSS/App.css';
import ReusableAppBar from './ReusableAppBar';
import { Element } from 'react-scroll';
import CoverImage from './Images/movemint cover.jpg';
import Footer from './Footer';
import ProjectTemplate from './ProjectTemplate';
import gallery1 from './Images/movemint cover.jpg';
import gallery2 from './Images/Before After URP.png'
import gallery3 from './Images/movemint Screenshot 1.jpg'
import gallery4 from './Images/movemint screenshot 3.jpg'
import gallery5 from './Images/movemint screenshot 4.jpg'


function movemint() {
  return (
    <main>
      {/*App bar*/}
      <ReusableAppBar />

      {/*Section 1: Header*/}
        <ProjectTemplate 
        CoverImageSRC={CoverImage}
        ProjectTitle="moveMINT"
        ProjectDescription="A short and sweet 2D platformer focused on movement mechanics."
        ProjectLink="https://carbonwastaken.itch.io/movemint"
        ProjectRole1="Game Designer, Solo Developer, Composer"
        ProjectTimeFrame="1 Month"
        ProjectDemo="https://www.youtube.com/embed/9UxXX1q3zp0?si=1waCtAAXTIE_UE4q"
        Desc1="moveMINT is a 2D pixel art platformer that I created over the span of a month. Originally, My idea
        was to have a story driven game that also had potential for speedrunners to take advantage of it's movement mechanics to complete the game faster.
        What I ended up doing was scrapping the story aspect and using the game more as a testing ground for developing 2D platforming game mechanics."
        Desc2="Something I really tried to get right was the movement. I added a physics-based movement that feels more realistic and 
        responsive to the player. I then added a jump that had the essentials for platforming: a jump buffer
        and coyote timing. Lastly, I aded a sliding mechanic that gives the player a boost of speed."
        Desc3="If you combine the slide boost with the jump, the player can preserve their momentum and build of great speeds. 
        Use of this mechanic is essential in achieving fast times on the levels."
        Desc4="Along with the movement mechanics, I added a timer and personal best system, coins, and traps in the levels.
        All of which combine for a more interactive and replayable experience."
        Desc5="My development on this game helped me to learn and improve on many concepts, and I've already reused or improved
        on the scripts created from moveMINT for my newer projects."
        Desc6=""
        Gallery1={gallery1}
        Gallery2={gallery2}
        Gallery3={gallery3}
        Gallery4={gallery4}
        Gallery5={gallery5}
        />

      {/*Section 4: Contact Me*/}
      <Element name='contact'>
        <div>
          <Footer />
        </div>
      </Element>
    </main>
  );
}

export default movemint;
