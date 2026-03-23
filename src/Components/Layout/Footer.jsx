import '../../Styles/App.css';

import { Typography, Box, Container } from '@mui/material';

import itch from '../../Assets/Images/itch.jpg';
import youtube from '../../Assets/Images/youtube.png';
import github from '../../Assets/Images/github.webp';

function Footer() {
    return (
    <main>
        
    {/*Section 4: Contact Me*/}
        <Box sx={{width:'100%', height: 450, bgcolor: 'background.alt', textAlign:'center'}}>
            <Typography variant ='h3' sx={{color: 'text.main', pt: 10,}}>
              Contact Me
            </Typography>

            <Box className='centered' sx={{borderTop: 2.5, borderColor: 'primary.main', mt: 1, width: 'auto', maxWidth: 400, pb: 3}} />


            <div className='centered-container'>
                <Box sx={{width:'80%', borderRadius:3, height:200, mt: 5, bgcolor:'background.main'}}>
                    <Container>
                        <Typography variant ='h6' sx={{color: 'text.alt', mt:4}}>
                          Primary Contact Email: 24clarkr@gmail.com 
                        </Typography>
                    </Container>

                    <div className='centered-container'>
                        <Box sx={{height:75, mt:2.5, mx: 2, borderRadius:3, bgcolor:'background.alt', width:200, overflow: 'hidden'}}>
                          <a href='https://carbonwastaken.itch.io/' target="_blank" rel="noopener noreferrer"><img src={itch}className='contact-image'></img></a>
                        </Box>

                        <Box sx={{height:75, mt:2.5, mx: 2, borderRadius:3, bgcolor:'background.alt', width:200, overflow: 'hidden'}}>
                            <a href='https://www.youtube.com/channel/UCgrywDMG1hTRvezDdgQBJAQ' target="_blank" rel="noopener noreferrer"><img src={youtube}className='contact-image'></img></a>
                        </Box>
                        <Box sx={{height:75, mt:2.5, mx: 2, borderRadius:3, bgcolor:'background.alt', width:200, overflow: 'hidden'}}>
                            <a href='https://github.com/carbon1337' target="_blank" rel="noopener noreferrer"><img src={github}className='contact-image'></img></a>
                        </Box>
                    </div>
                </Box>

            </div>
        </Box>
    </main>
    )
}

export default Footer;