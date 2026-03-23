import './CSS/App.css';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function ProjectButton(props) {
    return (
        <main>
              <div className='centered-container'>
                <div>
                  <Typography variant='h5' sx={{color:'text.main', textAlign: 'left', pl:2,}}>
                    {props.ProjectTitle}
                  </Typography>
                  <Link to={props.ProjectLink}>
                    <Typography className='project-text' variant='h6' sx={{color:'text.main'}}>
                      {props.ProjectDesc}
                    </Typography>

                    <img className='project-image' src={props.ProjectImageSRC}></img>
                  </Link>

                </div>
              </div>
        </main>
    )
}

export default ProjectButton;