import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Typography } from '@mui/material';
import ProjectButton from '../UI/ProjectButton';

function ProjectCarousel({ title, projects }) {
    const desktopSlides = projects.length;
    const tabletSlides = Math.min(projects.length, 3);
    const smallTabletSlides = Math.min(projects.length, 2);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: desktopSlides,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: tabletSlides,
                    arrows: projects.length > 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: smallTabletSlides,
                    arrows: projects.length > 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: projects.length > 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ mb: 8 }}>
            <Typography
                variant="h4"
                sx={{
                    color: 'white',
                    fontWeight: 700,
                    mb: 2.5,
                    textAlign: 'left',
                }}
            >
                {title}
            </Typography>

            <Box
                sx={{
                    position: 'relative',

                    '.slick-list': {
                        overflow: 'hidden',
                    },

                    '.slick-track': {
                        display: 'flex',
                    },

                    '.slick-slide': {
                        boxSizing: 'border-box',
                        height: 'auto',
                    },

                    '.slick-slide > div': {
                        paddingRight: '12px',
                        height: '100%',
                    },

                    '.slick-slide:last-of-type > div': {
                        paddingRight: 0,
                    },

                    '.slick-prev:before, .slick-next:before': {
                        display: 'none',
                    },

                    '.slick-prev, .slick-next': {
                        width: '50px',
                        height: '100%',
                        top: 0,
                        transform: 'none',
                        zIndex: 10,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                    },

                    '&:hover .slick-prev, &:hover .slick-next': {
                        opacity: 1,
                    },

                    '.slick-prev': {
                        left: 0,
                        borderTopLeftRadius: '12px',
                        borderBottomLeftRadius: '12px',
                    },

                    '.slick-next': {
                        right: 0,
                        borderTopRightRadius: '12px',
                        borderBottomRightRadius: '12px',
                    },

                    '.slick-prev::after, .slick-next::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        width: '10px',
                        height: '10px',
                        borderTop: '2px solid rgba(255,255,255,0.6)',
                        borderRight: '2px solid rgba(255,255,255,0.6)',
                        transform: 'translateY(-50%) rotate(45deg)',
                    },

                    '.slick-prev::after': {
                        left: '18px',
                        transform: 'translateY(-50%) rotate(-135deg)',
                    },

                    '.slick-next::after': {
                        right: '18px',
                    },
                }}
            >
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index}>
                            <Box
                                sx={{
                                    width: '100%',
                                    transform: {
                                        xs: 'scale(1)',
                                        md: projects.length >= 5 ? 'scale(0.95)' : 'scale(1)',
                                        lg: projects.length >= 6 ? 'scale(0.9)' : 'scale(1)',
                                    },
                                    transformOrigin: 'top center',
                                }}
                            >
                                <ProjectButton
                                    ProjectLink={project.link}
                                    ProjectTitle={project.title}
                                    ProjectDesc={project.desc}
                                    ProjectImageSRC={project.image}
                                />
                            </Box>
                        </div>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}

export default ProjectCarousel;