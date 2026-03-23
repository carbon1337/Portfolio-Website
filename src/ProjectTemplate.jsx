import {Typography, Box, Container} from '@mui/material';
import './CSS/App.css';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import Material-UI Icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectTemplate(props) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false, // Enable center mode
    centerPadding: '0', // Adjust the padding as needed
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main>
      {/*Section 1: Home*/}
      <Element name='home'>
        <Box sx={{ position: 'relative', width: '100%', minHeight: 300, height:'auto', mt: 10, py:3, overflow: 'hidden', bgcolor: "background.alt" }}> 
          <img className='cover-image' alt='cover' src={props.CoverImageSRC} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
          
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', display: 'inline-flex' }}>
            <Box sx={{ width: '80%', textAlign: 'right', px: 2 }}>
              <Typography variant ='h3' sx={{ fontSize: { xs: '1.1rem', lg: '2rem' }, color: 'text.main', pb: 1 }}>
                {props.ProjectTitle} {/* Title */}
              </Typography>

              <Typography variant ='h6' sx={{ fontSize: { xs: '1.1rem', lg: '1.5rem' }, color: 'text.alt', mt: 1 }}>
                {props.ProjectDescription} {/* Description */}
              </Typography>

              <a href={props.ProjectLink} target="_blank" rel="noopener noreferrer">
              <Typography className="link-text" variant ='h6' sx={{ fontSize: { xs: '1.1rem', lg: '1.5rem' }, color: 'primary.main', mt: 2}}>
                Play the game on Itch!
              </Typography>
              </a>
            </Box>

            <div className='vertical-line' />

            <Box sx={{ width: '80%', textAlign: 'left', px: 2 }}>
              <Typography variant ='h4' sx={{ fontSize: { xs: '1.1rem', lg: '2rem' }, color: 'text.main'}}>
                Role:
              </Typography>

              <Typography variant ='h6' sx={{ fontSize: { xs: '1.1rem', lg: '1.5rem' }, color: 'text.alt', mt: 1,}}>
                {props.ProjectRole1} {/* ProjectRole1 */}
              </Typography>

              <Typography variant ='h4' sx={{ fontSize: { xs: '1.1rem', lg: '2rem' }, color: 'text.main', mt: 1,}}>
                Duration:
              </Typography>

              <Typography variant ='h6' sx={{ fontSize: { xs: '1.1rem', lg: '1.5rem' }, color: 'text.alt', mt: 1 }}>
                {props.ProjectTimeFrame} {/* ProjectRole2 */}
              </Typography>

              <Typography variant ='h6' sx={{ fontSize: { xs: '1.1rem', lg: '1.5rem' }, color: 'text.alt', mt: 1 }}>
                {props.ProjectRole3} {/* ProjectRole3 */}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Element>

      {/*Section 3: About Me*/}
      <Box sx={{width:'100%', height: 'auto', bgcolor: 'background.alt', textAlign:'center'}}>
        <Element name='Gameplay'>
        <Typography variant ='h3' sx={{color: 'text.main', pt: 10}}>
          Gameplay
        </Typography>

        <Box className='centered' sx={{borderTop: 2.5, borderColor: 'primary.main', mt:1, width: 400, pb: 5}} />

        <Container sx={{maxWidth: { xs:'90%',md:'50%' }, width:'auto'}}>
          <div className="embed-container">
            <iframe src={props.ProjectDemo} title="YouTube video" allowFullScreen></iframe>
          </div>
        </Container>
        </Element>
        <Element name='Description'>

        <Typography variant ='h3' sx={{color: 'text.main', pt: 10, pb: 1}}>
          Description
        </Typography>

        <Box className='centered' sx={{borderTop: 2.5, borderColor: 'primary.main', mt:1, width: 400, pb: 5}} />

        <Container sx={{maxWidth: { xs:'90%',md:'50%' }, pb:10}}>

          <Typography variant ='h6' sx={{color: 'text.alt', pb: 5}}>
            {props.Desc1}
          </Typography>
          <Typography variant ='h6' sx={{color: 'text.alt', pb: 5}}>
            {props.Desc2}
          </Typography>

          <Typography variant ='h6' sx={{color: 'text.alt', pb: 5}}>
            {props.Desc3}
          </Typography>

          <Typography variant ='h6' sx={{color: 'text.alt', pb: 5}}> 
            {props.Desc4}
          </Typography>
          <Typography variant ='h6' sx={{color: 'text.alt', pb: 5}}>
            {props.Desc5}
          </Typography>
        </Container>
      </Element>
      </Box>

      <Element name='Gallery'>
      <Box sx={{width:'100%', maxHeight:900, height: 'auto', pb: 10, bgcolor: 'background.main', textAlign:'center'}}>
        <Typography variant ='h3' sx={{color: 'text.main', pt: 10, pb: 1}}>
          Gallery
        </Typography>

        <Box className='centered' sx={{borderTop: 2.5, borderColor: 'primary.main', mt:1, width: 400, pb: 5}} />
        <Container maxWidth="lg">
            <Slider {...settings}>
              <Box className='embed-container' sx={{px: 1,}}>
                <div>
                  <img src={props.Gallery1} alt='gallery 1'></img>
                </div>
              </Box>
              <Box className='embed-container' sx={{px: 1,}}>

                <div>
                  <img src={props.Gallery2} alt='gallery 2'></img>
                </div>
              </Box>
              <Box className='embed-container' sx={{px: 1,}}>
                <div>
                  <img src={props.Gallery3} alt='gallery 3'></img>
                </div>
              </Box>
              <Box className='embed-container' sx={{px: 1,}}>
                <div>
                  <img src={props.Gallery4} alt='gallery 4'></img>
                </div>
              </Box>
              <Box className='embed-container' sx={{px: 1,}}>
                <div>
                  <img src={props.Gallery5} alt='gallery 5'></img>
                </div>
              </Box>
            </Slider>
        </Container>
      </Box>
    </Element>


    </main>
  );
}

export default ProjectTemplate;
