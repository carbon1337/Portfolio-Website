import '../Styles/App.css';
import { Element } from 'react-scroll';

import ReusableAppBar from '../Components/UI/ReusableAppBar';
import Footer from '../Components/Layout/Footer';
import ProjectTemplate from '../Components/Projects/ProjectTemplate';

import CoverImage from '../Assets/Images/Dragon Thief 1.jpg';
import gallery1 from '../Assets/Images/Dragon Thief 1.jpg';
import gallery2 from '../Assets/Images/Dragon Thief 1.jpg';
import gallery3 from '../Assets/Images/Dragon Thief 1.jpg';
import gallery4 from '../Assets/Images/Dragon Thief 1.jpg';
import gallery5 from '../Assets/Images/Dragon Thief 1.jpg';
import gallery6 from '../Assets/Images/Dragon Thief 1.jpg';
import HeroGif from '../Assets/Gifs/Projects.gif';

function WhileTheySleep() {
  return (
    <main>
      <ReusableAppBar />

      <ProjectTemplate
        CoverImageSRC={CoverImage}
        HeroGif={HeroGif}
        ProjectTitle="While They Sleep"
        ProjectSummary="A solo-developed PSX-style stealth horror game built in Unity. The project focuses on player movement, stealth detection, noise systems, interaction logic, task progression, UI feedback, jumpscare sequencing, and overall gameplay system integration."
        ProjectLink="https://rileyclarke.itch.io/while-they-sleep"
        ProjectDemo="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"

        ProjectType="Solo Indie / Game Jam Style Project"
        ProjectEngine="Unity"
        ProjectLanguage="C#"
        ProjectTeamSize="Solo Developer"
        ProjectRole="Gameplay Programmer / Systems Designer / Solo Developer"
        ProjectTimeFrame="Solo project developed independently"
        BuildStatus="Playable vertical slice / active portfolio project"

        TechStack={[
          'Unity',
          'C#',
          'New Input System',
          'UI Systems',
          'Stealth Systems',
          'Detection Logic',
          'Audio Feedback',
          'Scene Transitions',
        ]}

        Overview="While They Sleep is a PSX-inspired stealth horror game where the player controls a goblin living in the basement of a house and sneaks upstairs at night to complete tasks, steal supplies, and avoid detection. The project was built as a solo game and reflects my interest in creating tense atmosphere through interacting gameplay systems rather than relying only on visuals."

        Contributions={[
          'Designed and programmed the core first-person player controller, including movement, crouching, jumping, footsteps, and camera behaviour.',
          'Built a noise meter system that increases from player movement and object interaction, delays before decay, and affects tension and failure states.',
          'Implemented interactable object systems for picking up, throwing, rotating, and using world items during stealth gameplay.',
          'Created stealth detection systems including security cameras, spotlight-based vision, detection meters, alarm logic, and player feedback.',
          'Built task-based progression systems to support a more structured game loop with on-screen objectives and completion tracking.',
          'Programmed the lose condition flow with jumpscare triggering, movement freeze, audio interruption, camera shake, and screen transitions.',
          'Integrated UI, ambient audio, post-processing atmosphere, and extraction flow into a cohesive playable experience as a solo developer.',
        ]}

        CollaborationNote="This was a solo-developed project. I was responsible for the gameplay programming, system design, UI behaviour, interaction flow, audio feedback, and overall integration of the core experience."

        ProgrammingConcepts={[
          {
            title: 'Object-Oriented System Design',
            description:
              'The project is broken into focused gameplay systems such as player control, noise tracking, task management, interactables, jumpscare management, and screen fading. This helped keep responsibilities separated and made systems easier to expand.',
          },
          {
            title: 'State and Event-Driven Gameplay Logic',
            description:
              'Detection, alarm behaviour, lose conditions, extraction triggers, and task completion all depend on events and changing gameplay states. This let the project respond cleanly to player actions and tension spikes.',
          },
          {
            title: 'UI Programming and Feedback Loops',
            description:
              'The game relies on UI for communicating objective progress, noise buildup, interaction prompts, and transitions. I used UI not just as decoration, but as a core part of player readability and tension management.',
          },
          {
            title: 'Player Interaction Systems',
            description:
              'I implemented systems for picking up, rotating, dropping, and throwing objects, which helped make the house feel interactive and supported both stealth and task-based gameplay.',
          },
          {
            title: 'Stealth Detection Logic',
            description:
              'Security cameras, view cones, detection meters, and alarm escalation were used to create readable stealth pressure. These systems needed to be clear to the player while still feeling threatening.',
          },
          {
            title: 'System Integration and Game Flow',
            description:
              'One of the strongest parts of this project is how different systems connect: movement, sound, detection, UI, jumpscare flow, and scene transitions all feed into the same player experience.',
          },
        ]}

        Challenges={[
          {
            challenge:
              'The game needed tension to come from gameplay systems rather than only from visuals or scripted horror moments.',
            solution:
              'I built a noise system, stealth detection, alarm escalation, and a lose-state sequence so the player’s own actions could create rising tension and risk during play.',
          },
          {
            challenge:
              'Because there are many interconnected systems, the project could easily become hard to manage if every mechanic directly referenced every other script.',
            solution:
              'I separated responsibilities into managers and focused scripts such as the noise meter, jumpscare manager, task UI controller, and screen fader so each system could handle a clear role.',
          },
          {
            challenge:
              'The game loop originally leaned more toward hoarding and score, but I wanted a more directed structure that better fit the setting and pacing.',
            solution:
              'I shifted the design toward a modular task-based system where the player sneaks upstairs to retrieve food, water, and other necessities, making progression more linear, readable, and purposeful.',
          },
          {
            challenge:
              'The lose condition needed to feel impactful and polished rather than abrupt.',
            solution:
              'I combined player freeze, jumpscare spawning, audio interruption, camera shake, and fade transitions to create a more complete and memorable failure sequence.',
          },
        ]}

        CompletionLevel="This project functions as a playable vertical slice with multiple integrated mechanics, a clear atmosphere, and a defined gameplay loop. It goes beyond a simple prototype because the systems support one another and the player can experience a full intended stealth-horror sequence."

        PolishSummary="The project includes integrated UI, audio feedback, stealth systems, interaction mechanics, failure states, and transitions. It also has a strong visual identity and cohesive tone, which helps it feel like a complete experience rather than a collection of disconnected mechanics."

        IntegratedSystems={[
          'First-person player controller',
          'Crouch and movement states',
          'Head bob and camera behaviour',
          'Footstep and terrain audio',
          'Noise meter with delayed decay',
          'Object pickup / throw / rotate interactions',
          'Security camera detection',
          'Alarm and tension escalation',
          'Task-based progression',
          'Interaction prompts',
          'Jumpscare lose condition',
          'Scene fade and transition management',
        ]}

        KnownLimitations="As an actively developed solo project, some systems are still being refined and expanded. The emphasis so far has been on building a strong gameplay foundation and integrating mechanics cleanly before pushing further into content scale."

        GameplayNote="The main things to notice in the gameplay are the interaction between stealth, noise, detection, task completion, and the lose-state sequence. The project is meant to show how multiple gameplay systems can work together to create atmosphere and tension."

        CodeSamples={[
          {
            title: 'Code Sample Placeholder: Noise Meter Logic',
            code: `// Replace with your real project code
public void AddNoise(float amount)
{
    currentNoise += amount;
    currentNoise = Mathf.Clamp(currentNoise, 0f, maxNoise);
    decayDelayTimer = decayDelay;
}`,
            notes: [
              'Shows a reusable gameplay system responding to player actions.',
              'Represents how tension is created through accumulation and delayed decay.',
              'A real excerpt from your NoiseMeter script would be a strong admissions sample.',
            ],
          },
          {
            title: 'Code Sample Placeholder: Task Completion Check',
            code: `// Replace with your real project code
if (AreAllRequiredTasksCompleted())
{
    ScreenFader.Instance.FadeToScene((SceneManager.GetActiveScene().buildIndex + 1).ToString());
}`,
            notes: [
              'Shows progression logic tied to task completion.',
              'Demonstrates system integration between task tracking and scene transitions.',
              'This would be especially strong with your real task system code.',
            ],
          },
          {
            title: 'Code Sample Placeholder: Jumpscare Trigger',
            code: `// Replace with your real project code
public void TriggerJumpscare()
{
    if (isJumpscareActive) return;
    isJumpscareActive = true;
    // freeze player, play audio, shake camera, transition
}`,
            notes: [
              'Shows state guarding and fail-state sequencing.',
              'Represents a good example of integrating multiple systems into one gameplay moment.',
              'A real excerpt here would support your explanation of polish and completion.',
            ],
          },
        ]}

        GalleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]}

        Reflection="While They Sleep is one of the strongest examples of my current programming ability because it combines multiple interdependent gameplay systems into a focused player experience. It reflects confidence in player control, interactions, UI scripting, gameplay feedback, and moment-to-moment system design. It also shows my growth in structuring Unity projects more cleanly, especially when building managers and reusable systems that support a larger gameplay loop."
      />

      <Element name="Contact">
        <div>
          <Footer />
        </div>
      </Element>
    </main>
  );
}

export default WhileTheySleep;