import '../Styles/App.css';
import { Element } from 'react-scroll';

import ReusableAppBar from '../Components/UI/ReusableAppBar';
import Footer from '../Components/Layout/Footer';
import ProjectTemplate from '../Components/Projects/ProjectTemplate';

import CoverImage from '../Assets/Images/taking souls background.png';
import gallery1 from '../Assets/Images/googins screenshot 1.png';
import gallery2 from '../Assets/Images/googins screenshot 2.png';
import gallery3 from '../Assets/Images/googins menu.png';
import gallery4 from '../Assets/Images/Googins 1.jpg';
import gallery5 from '../Assets/Images/Googins 2.jpg';

function TakinSouls() {
  return (
    <main>
      <ReusableAppBar />

      <ProjectTemplate
        CoverImageSRC={CoverImage}
        ProjectTitle="Takin' Souls"
        ProjectSummary="A 2D endless runner inspired by arcade games and the style of the Chrome dino runner. This project helped me practice gameplay simplicity, obstacle generation, pacing, replayability, and the challenges of scoping a short arcade-style game."
        ProjectLink="https://carbonwastaken.itch.io/takin-souls"
        ProjectRole="Developer, Game Designer, Artist"
        ProjectTimeFrame="1 Month"
        ProjectDemo="https://www.youtube.com/embed/ssjWN9-TFgw?si=zYu9Dqctsd8vMeER"
        ProjectType="Student Group Project"
        ProjectEngine="Unity"
        ProjectLanguage="C#"
        ProjectTeamSize="Small Team Project"
        BuildStatus="Completed class project"

        TechStack={[
          'Unity',
          'C#',
          '2D Gameplay',
          'Obstacle Generation',
          'Score Systems',
          'Arcade Design',
          'UI',
        ]}

        Overview="Takin' Souls is a 2D endless runner inspired by classic arcade design and the Chrome dino runner. It was created from a classroom prompt to make an arcade-style game, and the team decided to build a simple but replayable running game themed around David Goggins. The project focused on fast readability, simple inputs, scaling difficulty, and a score-chasing loop."

        Contributions={[
          'Helped develop the core endless runner gameplay loop.',
          'Worked on the design direction and overall game concept.',
          'Contributed art and presentation for the game’s theme and identity.',
          'Implemented or supported obstacle generation logic for the player to avoid while running.',
          'Helped shape the difficulty ramp so the game became harder as the run continued.',
        ]}

        CollaborationNote="This was a team project created for a game development class. I contributed as a developer, designer, and artist. A co-developer, Ben, created the leaderboard system."

        ProgrammingConcepts={[
          {
            title: 'Gameplay Loop Design',
            description:
              'The project demonstrates how a simple input system can still support a replayable arcade loop through timing, score pressure, and increasing speed or difficulty.',
          },
          {
            title: 'Obstacle Spawning and Variation',
            description:
              'Different obstacle types such as vultures, scorpions, and tumbleweeds were used to create gameplay variety and test timing-based player reactions.',
          },
          {
            title: 'Difficulty Scaling',
            description:
              'A major part of the arcade feel came from making the game progressively harder over time rather than keeping the challenge static.',
          },
          {
            title: 'High Score and Replayability Systems',
            description:
              'The project introduced the idea of tracking player performance and encouraging repeat attempts through score-based progression.',
          },
          {
            title: 'Scoping and Simplicity',
            description:
              'Because arcade games depend on clarity, this project required keeping the controls and rules simple while still making the game engaging.',
          },
          {
            title: 'Early Enemy / Hazard Generation Logic',
            description:
              'This was one of my earlier experiences working with generation systems and gave me useful lessons about reliability and testing.',
          },
        ]}

        Challenges={[
          {
            challenge:
              'The game needed to feel arcade-like, which meant the controls and rules had to stay simple while still being fun over repeated attempts.',
            solution:
              'The design was kept focused around a single core input, jumping, with challenge coming from timing, obstacle variety, and increasing pace rather than from complicated mechanics.',
          },
          {
            challenge:
              'Obstacle generation needed to create fair but varied gameplay without becoming repetitive or unstable.',
            solution:
              'A generation script was built to spawn different hazards, although it remained one of the rougher systems in the project and became an important lesson in prioritizing system reliability.',
          },
          {
            challenge:
              'The team wanted the project to feel complete and replayable despite limited development time.',
            solution:
              'By focusing on a strong arcade loop, recognizable visual theme, and score-driven structure, the team was able to create a project that felt cohesive within scope.',
          },
        ]}

        CompletionLevel="This project reached the level of a finished class assignment with a complete core loop, clear theme, and playable arcade progression. It was not a large-scale project, but it did function as a complete small game."

        PolishSummary="The game had a clear visual identity, a functioning run-and-avoid gameplay loop, and a high-score focused structure that supported replayability. Some systems, especially obstacle generation and leaderboard submission, were less stable than intended."

        IntegratedSystems={[
          'Player jump control',
          'Obstacle spawning',
          'Difficulty scaling',
          'Score / high score structure',
          'Arcade pacing',
          'UI presentation',
          'Themed visuals and art direction',
        ]}

        KnownLimitations="The generation system was one of the weaker parts of the project and is the main thing I would rebuild if I revisited the game. The leaderboard also stopped accepting new entries after release, which limited the long-term functionality of the score system."

        GameplayNote="The most important things to notice in the gameplay are the simple one-button input, the obstacle timing, the increasing difficulty, and the way the score-driven arcade loop encourages replayability."

        CodeSamples={[
          {
            title: 'Code Sample Placeholder: Obstacle Generation',
            code: `// Replace with a real excerpt from the project
void SpawnObstacle()
{
    int randomIndex = Random.Range(0, obstaclePrefabs.Length);
    Instantiate(obstaclePrefabs[randomIndex], spawnPoint.position, Quaternion.identity);
}`,
            notes: [
              'Represents early work with hazard generation and gameplay pacing.',
              'Would support your explanation of obstacle variety and replay structure.',
              'Best replaced with a real excerpt from your spawning logic.',
            ],
          },
        ]}

        GalleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5]}

        Reflection="Takin' Souls reflects an earlier stage in my development, but it was important for teaching me about game scoping, replayability, difficulty scaling, and the challenges of generation systems. It also helped me understand how much polish and reliability matter even in a simple arcade game. Looking back, I can clearly see where I have improved since then, especially in structuring gameplay systems more cleanly."
      />

      <Element name="Contact">
        <div>
          <Footer />
        </div>
      </Element>
    </main>
  );
}

export default TakinSouls;