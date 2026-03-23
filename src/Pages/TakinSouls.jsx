import '../Styles/App.css';
import { Element } from 'react-scroll';

import ReusableAppBar from '../Components/UI/ReusableAppBar';
import Footer from '../Components/Layout/Footer';
import ProjectTemplate from '../Components/Projects/ProjectTemplate';

import CoverImage from '../Assets/Images/taking souls background.png';
import gallery1 from '../Assets/Images/googins screenshot 1.png'
import gallery2 from '../Assets/Images/googins screenshot 2.png'
import gallery3 from '../Assets/Images/googins menu.png'
import gallery4 from '../Assets/Images/Googins 1.jpg'
import gallery5 from '../Assets/Images/Googins 2.jpg'

function TakinSouls() {
  return (
    <main>
      {/*App bar*/}
      <ReusableAppBar />

      {/*Section 1: Header*/}
        <ProjectTemplate 
        CoverImageSRC={CoverImage}
        ProjectTitle="Takin' Souls"
        ProjectDescription="An endless running game inspired by legendary endurance athlete David Goggins."
        ProjectLink="https://carbonwastaken.itch.io/takin-souls"
        ProjectRole1="Developer, Game Designer, Artist"
        ProjectTimeFrame="1 Month"
        ProjectDemo="https://www.youtube.com/embed/ssjWN9-TFgw?si=zYu9Dqctsd8vMeER"
        Desc1="Takin' Souls is a 2D endless-runner game similar to the classic dino run game on Google. It was created from a prompt to make
        an arcade-style game in my Game Dev class. Our group knew we wanted to make an endless running game once we heard the theme, so
        we went to work brainstorming different themes to base the art off of. What we landed on was the motivational speaker and 
        endurance athlete; David Goggins."
        Desc2="To fit the theme of an arcade-style game, it was crucial to make the core mechanics of the game very simple.
        In Takin' Souls, the only input you have to worry about is jumping at the correct time. Another aspect of the game that fits into the
        arcade style is the scale in difficulty. In an arcade, it is typical that the game will get substantially harder as the game 
        progresses."
        Desc3="With the help of some artists, we came up with a few different obstacles to get in your way. A vulture, scorpion, and tumbleweed all have
        a chance to be generated in front of the player to be jumped over or avoided. Due to a lack of time left in the project, the generation script 
        I made was fairly buggy. If i were to remake the game again, that would be the number one priority of getting right."
        Desc4="Initially, the game contained a leaderboard to save each players highscore. Special credit to my co-developer Ben for creating that.
        Unfortunately, the submittion of new entries to the leaderboard stopped working a short while after we made the game."
        Desc5="Overall, the development of this game taught me important game concepts such as properly scoping a game, creating a high-score system, and the beginning
        of understanding enemy generation."
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

export default TakinSouls;
