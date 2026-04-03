import '../Styles/App.css';
import { Element } from 'react-scroll';

import ReusableAppBar from '../Components/UI/ReusableAppBar';
import Footer from '../Components/Layout/Footer';
import ProjectTemplate from '../Components/Projects/ProjectTemplate';

import CoverImage from '../Assets/Images/BuffBeeScreenshot (1).png';
import gallery1 from '../Assets/Images/BuffBeeScreenshot (1).png';
import gallery2 from '../Assets/Images/BuffBeeScreenshot (2).png';
import gallery3 from '../Assets/Images/BuffBeeScreenshot (3).png';
import gallery4 from '../Assets/Images/BuffBeeScreenshot (4).png';
import gallery5 from '../Assets/Images/BuffBeeScreenshot (5).png';
import gallery6 from '../Assets/Images/BuffBeeScreenshot (6).png';

function BuffBee() {
  return (
    <main>
      <ReusableAppBar />

      <ProjectTemplate
        CoverImageSRC={CoverImage}
        ProjectTitle="Buff Bee"
        ProjectSummary="A 3D platformer made for PegJam 2024 in a team of five. This project demonstrates collaborative development, fast jam scoping, and building gameplay systems within a short production window."
        ProjectLink="https://dobymick.itch.io/buff-bee"
        ProjectRole="Co-Developer, Game Designer"
        ProjectTimeFrame="72 Hours"
        ProjectDemo="https://www.youtube.com/embed/Wy2GrS3enoI?si=7U66mKbePMjcNcau"
        ProjectType="Collaborative Game Jam Project"
        ProjectEngine="Unity"
        ProjectLanguage="C#"
        ProjectTeamSize="5 Developers / Artists"
        BuildStatus="Completed submitted jam build"

        TechStack={[
          'Unity',
          'C#',
          '3D Platforming',
          'Team Collaboration',
          'Rapid Prototyping',
          'Jam Development',
          'UI / Gameplay Integration',
        ]}

        Overview="Buff Bee is a 3D platformer created for PegJam 2024 by a team of five. Eli and I handled programming, while the rest of the team contributed 2D and 3D art. The project was built in 72 hours and then presented live to the other jam participants, which made it especially important to scope the game around a clear concept and a playable core loop."

        Contributions={[
          'Worked as one of the two programmers on the project.',
          'Contributed to the game’s design direction and gameplay structure.',
          'Helped build and integrate core gameplay functionality during a short jam timeline.',
          'Worked collaboratively with artists and the second programmer to turn the concept into a complete playable build.',
        ]}

        CollaborationNote="This project was made in a group of five. Eli and I were the programmers, Justin handled 3D art, and Jorn and Rashida handled 2D art. Because this was a team jam, one of the key skills demonstrated here is collaborative production under time pressure."

        ProgrammingConcepts={[
          {
            title: 'Collaborative Development',
            description:
              'This project shows my ability to work on a shared game with other programmers and artists, align scope quickly, and help integrate different parts into one playable build.',
          },
          {
            title: 'Rapid Prototyping',
            description:
              'Game jam development requires building systems quickly, testing them early, and making decisions based on what can realistically be finished in time.',
          },
          {
            title: '3D Gameplay Integration',
            description:
              'The project demonstrates work in a 3D Unity pipeline, where player behaviour, environment interaction, visuals, and presentation all need to come together in a short timeframe.',
          },
          {
            title: 'Production Scoping',
            description:
              'A major part of the work was deciding what features were important enough to implement within 72 hours and what should be cut to protect overall quality.',
          },
          {
            title: 'Team Pipeline Awareness',
            description:
              'Because the project involved both programmers and artists, it required awareness of how technical work and art implementation affect one another during development.',
          },
          {
            title: 'Presentation Readiness',
            description:
              'Since the game was presented live after the jam, it also needed to be stable and readable enough to communicate the concept clearly to an audience.',
          },
        ]}

        Challenges={[
          {
            challenge:
              'The team only had 72 hours to create a game that was both playable and presentable to a live audience.',
            solution:
              'The project had to stay tightly scoped around a core idea, with the team focusing on the most important gameplay and presentation elements first.',
          },
          {
            challenge:
              'Working in a larger jam team adds coordination challenges, especially when programming and art are being developed at the same time.',
            solution:
              'The team divided responsibilities clearly and worked in parallel so the programming and art pipelines could come together efficiently by the end of the jam.',
          },
          {
            challenge:
              'A jam build still needs enough polish to communicate its idea quickly, especially in a live presentation setting.',
            solution:
              'The work focused on making the project understandable, playable, and cohesive rather than overloading it with features that could not be fully finished.',
          },
        ]}

        CompletionLevel="This project reached the level of a finished game jam build with a clear concept, playable mechanics, and enough stability to be presented publicly at the end of the event."

        PolishSummary="Within the limits of a 72-hour jam, the project achieved a solid level of presentation, collaboration, and completeness. Its strongest value in the portfolio is showing team-based development and the ability to contribute meaningfully under pressure."

        IntegratedSystems={[
          '3D gameplay systems',
          'Team-integrated art and design',
          'Playable jam loop',
          'Collaborative production workflow',
          'Presentation-ready build',
        ]}

        KnownLimitations="Because the project was created in a short jam setting, the emphasis was on building a complete and presentable experience rather than developing deep or highly extensible systems."

        GameplayNote="This project is most useful as evidence of collaboration, quick development, and the ability to help deliver a complete jam build within a short timeframe."

        CodeSamples={[
          {
            title: 'Code Sample Placeholder: Jam Gameplay System',
            code: `// Replace with a real excerpt from Buff Bee
void Start()
{
    // initialize gameplay system
}`,
            notes: [
              'Use this section for one of your actual Buff Bee gameplay scripts.',
              'A real excerpt would help distinguish your role more clearly in the portfolio.',
            ],
          },
        ]}

        GalleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]}

        Reflection="Buff Bee is valuable in my portfolio because it shows collaborative development in a time-constrained environment. Even though it does not represent the same solo system depth as some of my later projects, it demonstrates that I can contribute to a team production pipeline, help scope a game realistically, and work toward a complete public-facing build under pressure."
      />

      <Element name="Contact">
        <div>
          <Footer />
        </div>
      </Element>
    </main>
  );
}

export default BuffBee;