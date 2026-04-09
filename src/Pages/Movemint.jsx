import '../Styles/App.css';
import { Element } from 'react-scroll';

import ReusableAppBar from '../Components/UI/ReusableAppBar';
import Footer from '../Components/Layout/Footer';
import ProjectTemplate from '../Components/Projects/ProjectTemplate';

import CoverImage from '../Assets/Images/movemint cover.jpg';
import HeroGif from '../Assets/Gifs/MovemintHero.gif';
import gallery1 from '../Assets/Images/movemint cover.jpg';
import gallery2 from '../Assets/Images/Before After URP.png';
import gallery3 from '../Assets/Images/movemint Screenshot 1.jpg';
import gallery4 from '../Assets/Images/movemint screenshot 3.jpg';
import gallery5 from '../Assets/Images/movemint screenshot 4.jpg';

function Movemint() {
  return (
    <main>
      <ReusableAppBar />

      <ProjectTemplate
        CoverImageSRC={CoverImage}
        HeroGif={HeroGif}
        ProjectTitle="moveMINT"
        ProjectSummary="A solo-developed 2D platformer built as a focused movement project. It highlights physics-based movement, jump buffering, coyote time, momentum preservation, sliding, timing systems, and replayable platforming design."
        ProjectLink="https://carbonwastaken.itch.io/movemint"
        ProjectRole="Game Designer, Solo Developer, Composer"
        ProjectTimeFrame="1 Month"
        ProjectDemo="https://www.youtube.com/embed/9UxXX1q3zp0?si=1waCtAAXTIE_UE4q"
        ProjectType="Solo Indie Project"
        ProjectEngine="Unity"
        ProjectLanguage="C#"
        ProjectTeamSize="Solo Developer"
        BuildStatus="Completed playable build"

        TechStack={[
          'Unity',
          'C#',
          '2D Platforming',
          'Physics-Based Movement',
          'Speedrunning Systems',
          'Timers',
          'Level Interactions',
        ]}

        Overview="moveMINT is a 2D pixel art platformer I developed over the span of a month. It began as a larger idea with story elements, but I eventually narrowed the project into a focused testbed for building and refining movement mechanics. That decision helped the game become a stronger example of responsive platforming design and system-focused solo development."

        Contributions={[
          'Designed and programmed the full project as a solo developer.',
          'Built the player movement system with a strong focus on responsiveness and feel.',
          'Implemented platforming features such as jump buffering and coyote time.',
          'Created a sliding mechanic that could be combined with jumps for momentum-based movement.',
          'Added timers, personal best tracking, coins, and traps to support replayability.',
          'Composed or contributed the game’s audio identity alongside the rest of the solo development work.',
        ]}

        CollaborationNote="This was a solo-developed project. I handled the design, programming, and overall implementation myself."

        ProgrammingConcepts={[
          {
            title: 'Physics-Based Player Movement',
            description:
              'The project focuses heavily on responsive 2D movement that still feels grounded and controllable. This includes tuning momentum, speed, and jump behaviour.',
          },
          {
            title: 'Platforming Quality-of-Life Systems',
            description:
              'Jump buffering and coyote time were added to make the controls more forgiving and skill-supportive, which are important techniques in polished platformer design.',
          },
          {
            title: 'Momentum Preservation',
            description:
              'The slide and jump systems were designed to interact in a way that lets the player preserve or build speed, adding depth beyond simple movement.',
          },
          {
            title: 'Replayability Systems',
            description:
              'The addition of timers, personal bests, coins, and traps helped the project move beyond a pure movement demo and into a replayable platforming experience.',
          },
          {
            title: 'Design Through Iteration',
            description:
              'A major part of the project was learning when to simplify scope. By dropping the larger story plan, I could focus on doing one area of the game well.',
          },
          {
            title: 'Reusable Code Foundations',
            description:
              'The scripts and ideas from moveMINT later became a foundation for newer projects, making this an important stepping stone in my development process.',
          },
        ]}

        Challenges={[
          {
            challenge:
              'The original project idea was larger and more story-focused, which risked spreading the project too thin.',
            solution:
              'I reduced the scope and turned the project into a focused movement testbed, which let me spend more time refining mechanics instead of trying to build too many unrelated systems.',
          },
          {
            challenge:
              'Good platforming movement needs to feel both responsive and skill-based, which can be difficult to tune.',
            solution:
              'I built the controller around physics-based movement, then added jump buffering, coyote time, and a slide mechanic to make movement feel smoother and more expressive.',
          },
          {
            challenge:
              'A movement system on its own can feel more like a prototype than a game.',
            solution:
              'I added timers, personal best tracking, coins, and traps so the movement mechanics had a gameplay context and a reason for replay.',
          },
        ]}

        CompletionLevel="This project reached the level of a completed solo build with a clear gameplay focus and multiple supporting systems. It is more than a simple prototype because the movement mechanics are integrated into a replayable platforming structure."

        PolishSummary="moveMINT has a focused identity, a clear mechanical purpose, and player-facing systems that support speedrunning and repeat play. Its strongest quality is how intentionally the movement systems were developed and integrated."

        IntegratedSystems={[
          'Physics-based movement',
          'Jump buffering',
          'Coyote time',
          'Sliding mechanic',
          'Momentum preservation',
          'Timer system',
          'Personal best tracking',
          'Coins and hazards',
        ]}

        KnownLimitations="The project intentionally became narrower in scope than originally planned, so it does not showcase narrative or content-heavy systems. Its strength is in depth of movement design rather than breadth of world or story content."

        GameplayNote="The key things to notice in the gameplay are the responsiveness of movement, the interaction between slide and jump momentum, and the way timing systems and level hazards support replayability."

        CodeSamples={[
          {
            title: 'Player Movement with Momentum preservation',
            code: `private void HandleMovement() 
    {
        //Input system value * speed in playerdata
        float targetSpeed = horizontal * Data.runMaxSpeed;

        #region Calculate AccelRate
		float accelRate;

		//Checks if the target speed is positive, applies accel or deccel accordingly
        //If not grounded, also factor the air accel/deccel rates
		if (IsGrounded()) 
        {
			accelRate = (Mathf.Abs(targetSpeed) > 0.01f) ? Data.runAccelAmount : Data.runDeccelAmount;
        } else 
        {
			accelRate = (Mathf.Abs(targetSpeed) > 0.01f) ? Data.runAccelAmount * Data.accelInAir : Data.runDeccelAmount * Data.deccelInAir;
        }
		#endregion

        #region Conserve Momentum
        //Dont slow down player if they are moving in their desired direction but at a greater speed than max
		if(Data.doConserveMomentum && Mathf.Abs(rb.velocity.x) > Mathf.Abs(targetSpeed) && Mathf.Sign(rb.velocity.x) == Mathf.Sign(targetSpeed) && Mathf.Abs(targetSpeed) > 0.01f && !IsGrounded())
		{
			//Prevent any deceleration from happening, or in other words conserve are current momentum
			accelRate = 0f; 
		}
		#endregion

		//Calculate difference between current velocity and desired velocity
		float speedDif = targetSpeed - rb.velocity.x;

		//Calculate force along x-axis to apply to thr player
		float movement = speedDif * accelRate;

		rb.AddForce(movement * Vector2.right, ForceMode2D.Force);

    }`,
            notes: [
              'Player movement function with acceleration, decceleration, and Momentum preservation. When paired with the sliding function in the game it allows you to build up crazy speeds.',
              'Creates an excellent game feel for both casual players, and those who want to speedrun.',
            ],
          },
          {
            title: 'Player Jump with coyote timing and jump buffer',
            code: `private void HandleJump() 
    {
        //Reset jump variables when grounded. If not Grounded, start the coyote timer.
        if(IsGrounded()) 
        {
            coyoteTimeCounter = coyoteTime;

            releasedJump = false;
        } else 
        {
            coyoteTimeCounter -= Time.deltaTime;
        }

        //If you press the jump button, start the jump buffer counter, and reset the bools to detect if you have jumped.
        //If you aren't pressing jump, start the jump buffer timer.
        if(performedJump) 
        {
            jumpBufferCounter = jumpBufferTime;

            performedJump = false;
            releasedJump = false;
        } else 
        {
            jumpBufferCounter -= Time.deltaTime;
        }

        //If the Jump buffer and coyote timer haven't reached zero, perform a jump.
        if(jumpBufferCounter > 0 && coyoteTimeCounter > 0) 
        {
            rb.velocity = new Vector2(rb.velocity.x, Data.jumpingPower);

            jumpBufferCounter = 0;
        }

        //If you are on the wall and you have performed a jump, wall jump.
        if(jumpBufferCounter > 0 && IsOnWall()) 
        {
            float wallJumpDirection = isFacingRight ? -1f : 1f;
            rb.velocity = new Vector2(Data.wallJumpingPower * wallJumpDirection, Data.jumpingPower);
        }

        //If you released a jump before you hit your peak, multiply the yVelocity to descend.
        if(releasedJump && rb.velocity.y > 0f) 
        {
            rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);

            coyoteTimeCounter = 0f;
        }


        //If you are touching the wall but not grounded, reduce your fall speed. (Slide down the wall)
        if(IsOnWall() && rb.velocity.y != 0) 
        {
            rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.8f);
        }
    }`,
            notes: [
              ''
            ],
          },
        ]}

        GalleryImages={[gallery1, gallery2, gallery3, gallery4, gallery5]}

        Reflection="moveMINT is an important project in my portfolio because it shows one of the first times I deliberately narrowed scope in order to make the end result stronger. It reflects a lot of growth in movement design, player feel, and mechanical iteration. It also became a useful foundation for later work, since I have already reused and improved ideas from this project in newer systems."
      />

      <Element name="Contact">
        <div>
          <Footer />
        </div>
      </Element>
    </main>
  );
}

export default Movemint;