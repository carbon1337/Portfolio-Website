import '../Styles/App.css';
import { Element } from 'react-scroll';

import ReusableAppBar from '../Components/UI/ReusableAppBar';
import Footer from '../Components/Layout/Footer';
import ProjectTemplate from '../Components/Projects/ProjectTemplate';

import CoverImage from '../Assets/Images/Dragon Thief Cover.png';
import gallery1 from '../Assets/Images/Dragon Thief 1.jpg';
import gallery2 from '../Assets/Images/Dragon Thief 2.jpg';
import gallery3 from '../Assets/Images/Dragon Thief 3.jpg';
import gallery4 from '../Assets/Images/Dragon Thief 4.jpg';
import gallery5 from '../Assets/Images/Dragon Thief 5.jpg';
import gallery6 from '../Assets/Images/Dragon Thief 6.jpg';
import HeroGif from '../Assets/Gifs/DragonThiefHero.gif';

function DragonThief() {
  return (
    <main>
      <ReusableAppBar />

      <ProjectTemplate
        CoverImageSRC={CoverImage}
        HeroGif={HeroGif}
        ProjectTitle="The Dragon Thief"
        ProjectSummary="A top-down roguelike dungeon crawler created in Unity for MiniJam151: Dragons. This project was built in 72 hours and demonstrates my work in gameplay systems, enemy behaviour, combat logic, UI scripting, and reusable audio implementation."
        ProjectLink="https://carbonwastaken.itch.io/the-dragon-thief"
        ProjectDemo="https://www.youtube.com/embed/Wy2GrS3enoI?si=7U66mKbePMjcNcau"

        ProjectType="Collaborative Game Jam Project"
        ProjectEngine="Unity"
        ProjectLanguage="C#"
        ProjectTeamSize="2 Developers"
        ProjectRole="Gameplay Programmer / Co-Developer"
        ProjectTimeFrame="72 Hours"
        BuildStatus="Completed submitted jam build"

        TechStack={[
          'Unity',
          'C#',
          'PlasticSCM/Unity Version Control',
          '2D Gameplay Systems',
          'Enemy AI',
          'Combat Logic',
          'UI Scripting',
          'Audio Systems',
        ]}

        Overview="The Dragon Thief is a top-down roguelike dungeon crawler built around the idea of stealing treasure from dragons and hoarding it in your cave. The project was created for MiniJam151 under a 72-hour time limit, which meant every system had to be scoped carefully and integrated quickly into a complete playable build."

        Contributions={[
          'Programmed player movement for top-down navigation using adapted logic from one of my earlier projects.',
          'Implemented core combat and health behaviour for both the player and enemies.',
          'Set up enemy AI behaviour using Unity’s animation system and state-based logic.',
          'Built UI scripting to support gameplay readability and player feedback.',
          'Created and integrated a reusable sound manager to avoid scattered one-off audio calls across many scripts.',
          'Contributed to overall game design direction and how the main gameplay loop should feel during play.',
        ]}

        CollaborationNote="This project was created in collaboration with my friend Eli. My work focused on player movement, combat, enemy AI, UI scripting, and audio systems. Eli handled dungeon generation, the shop system, and the player inventory system."

        ProgrammingConcepts={[
          {
            title: 'Object-Oriented Gameplay Scripting',
            description:
              'I separated player, enemy, combat, UI, and audio responsibilities into distinct scripts so that each system had a clear role and was easier to test and expand during the jam.',
          },
          {
            title: 'State-Based Enemy Behaviour',
            description:
              'Enemy actions were tied to state changes and animation behaviour so that movement, attacking, and damage interactions felt readable and connected.',
          },
          {
            title: 'Combat and Health Logic',
            description:
              'I implemented the core damage flow between player and enemies, making sure combat interactions triggered at the correct time within attack behaviour.',
          },
          {
            title: 'Reusable Systems Design',
            description:
              'Instead of hard-coding sound effects directly into many unrelated scripts, I built a more reusable sound manager approach that I could carry into future projects.',
          },
          {
            title: 'UI Programming and Feedback',
            description:
              'I used UI scripting to communicate gameplay information clearly to the player and support the overall usability of the experience.',
          },
          {
            title: 'Rapid Integration Under Constraint',
            description:
              'Because this was a 72-hour jam, I had to prioritize systems that were lightweight, functional, and fast to integrate into one cohesive build.',
          },
        ]}

        Challenges={[
          {
            challenge:
              'My earlier movement code was built for a different project, so it needed to be adapted cleanly for top-down movement across both the X and Y axes.',
            solution:
              'I refactored the existing movement approach so it fit the needs of this project instead of rewriting everything from scratch, which saved time while still giving me a controller that worked for the jam.',
          },
          {
            challenge:
              'Enemy combat needed to feel readable and synchronized rather than just applying damage at arbitrary times.',
            solution:
              'I used Unity’s animation system and state setup so enemy behaviour and damage timing could connect more naturally to attack animations.',
          },
          {
            challenge:
              'Audio implementation had felt messy in some of my previous work because sound calls ended up spread across too many unrelated scripts.',
            solution:
              'I focused on making a more reusable sound manager that could centralize audio behaviour and give me a cleaner structure to reuse in future projects.',
          },
        ]}

        CompletionLevel="This project reached the level of a completed game jam build with a full playable loop, integrated mechanics, and a clear game identity. While it was naturally limited by the 72-hour timeframe, it was more than a loose prototype and functioned as a finished submission."

        PolishSummary="The build included working gameplay systems, integrated UI, audio feedback, enemy behaviour, and a consistent visual presentation. Within jam scope, the project felt complete enough to present externally and communicate a clear gameplay loop."

        IntegratedSystems={[
          'Player movement',
          'Enemy AI',
          'Combat interactions',
          'Health and damage',
          'UI feedback',
          'Reusable audio management',
          'Dungeon exploration loop',
          'Loot and hoarding theme integration',
        ]}

        KnownLimitations="Because of the jam deadline, the project prioritized completing a polished core loop over building deeper long-term content or more scalable systems. Some decisions were made for speed and clarity rather than for maximum extensibility."

        GameplayNote="In the gameplay footage, the main things to notice are the player movement, combat flow, enemy behaviour, UI readability, and the way the systems come together into a complete jam-ready gameplay loop."

        CodeSamples={[
          {
            title: 'Top-Down 2D movement with acceleration and decceleration',
            code: `private void HandleMovement() 
    {
        float targetSpeedX = horizontal * Data.moveSpeed;
        float targetSpeedY = vertical * Data.moveSpeed;

        #region Calculate AccelRate
        float accelRateX;
        float accelRateY;

        // Gets an acceleration value based on if we are accelerating or trying to decelerate.
        accelRateX = (Mathf.Abs(targetSpeedX) > 0.01f) ? Data.runAccelAmount : Data.runDeccelAmount;
        accelRateY = (Mathf.Abs(targetSpeedY) > 0.01f) ? Data.runAccelAmount : Data.runDeccelAmount;
        #endregion

        // Calculate difference between current velocity and desired velocity
        float speedDifX = targetSpeedX - rb.velocity.x;
        float speedDifY = targetSpeedY - rb.velocity.y;

        // Calculate force along x-axis and y-axis to apply to the player
        float movementX = speedDifX * accelRateX;
        float movementY = speedDifY * accelRateY;

        rb.AddForce(new Vector2(movementX, movementY), ForceMode2D.Force);
    }`,
            notes: [
              'Shows the function that handles that handles the actual movement of the player',
              'Utilizes input values from the Input System',
              'For game feel I decided to utilize and acceleration and decceleration I was working on from a 3D FPS project, repurposed to work with top-down 2D controls.',
            ],
          },
          {
            title: 'Enemy State Machine: Moving Behaviour',
            code: `    //OnStateUpdate is called on each Update frame between OnStateEnter and OnStateExit callbacks
    override public void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        //Freeze animator when player dies
        if(GameManager.Instance.playerIsDead) 
        {
            animator.SetBool("canAttack", false);
            animator.SetBool("canMove", false);
        }

        //Ensure enemy is looking at the player
        enemyManager.LookAtPlayer();

        //Offset on Y axis so the dragon is "flying" above target
        Vector3 offset = new Vector3(0f, 4f, 0f);

        //Find target (player) with offset accounted for
        Vector2 target = new Vector2(player.position.x, player.position.y - offset.y);
        Vector2 newPos = Vector2.MoveTowards(rb.position, target, Data.movementSpeed * Time.fixedDeltaTime);

        //Move towards the new pos(target)
        rb.MovePosition(newPos);

        //Vector2 for the center of the dragon with the offset accounted for
        Vector2 circleCenter = (Vector2)animator.transform.position + (Vector2)offset;

        // Use Physics2D.OverlapCircle to check for colliders within the detection radius
        Collider2D[] colliders = Physics2D.OverlapCircleAll(circleCenter, Data.attackRange);

        foreach (Collider2D collider in colliders)
        {
            // Check if the collider is the player, attack player
            if (collider.transform == player)
            {
                animator.SetTrigger("Attack");
            }
        }
    }`,
            notes: [
              'Used state machines with Unitys animator to create behaviours for idle, attack, and movement.',
              'Snippet is of the movement state on update.',
              'Simple Setup but works well for modular adjustments in the future.',
            ],
          },
        ]}

        GalleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]}

        Reflection="This project reflects a solid level of confidence for me in gameplay scripting, combat logic, enemy behaviour, UI integration, and building reusable support systems under time pressure. It also represents growth in how I think about organizing systems so they stay cleaner and more reusable. Because the project was built under jam constraints, some systems were intentionally scoped for speed, but the final result still shows that I can implement and integrate multiple gameplay systems into a complete playable build."
      />

      <Element name="Contact">
        <div>
          <Footer />
        </div>
      </Element>
    </main>
  );
}

export default DragonThief;