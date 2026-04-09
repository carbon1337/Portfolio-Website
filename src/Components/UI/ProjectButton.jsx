import '../../Styles/App.css';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

function ProjectButton(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <Link
                to={props.ProjectLink}
                style={{ textDecoration: 'none' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            >
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#181818',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                    mb: 1.25,

                    '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '0 18px 40px rgba(0,0,0,0.45)',
                    },

                    '&:hover .project-overlay': {
                        opacity: 1,
                    },

                    '&:hover .project-image': {
                        transform: 'scale(1.04)',
                    },
                }}
            >
                <Box
                    component="img"
                    className="project-image"
                    src={props.ProjectImageSRC}
                    alt={props.ProjectTitle}
                    sx={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                    }}
                />

                <Box
                    className="project-overlay"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 2,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.1) 100%)',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                        }}
                    >
                        {props.ProjectTitle}
                    </Typography>
                </Box>
            </Box>

            <Typography
                variant="subtitle1"
                sx={{
                    color: 'white',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    mb: 0.5,
                }}
            >
                {props.ProjectTitle}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {props.ProjectDesc}
            </Typography>
        </Link>
    </Box>
    );
}

export default ProjectButton;