import '../../Styles/App.css';
import { Element } from 'react-scroll';

import { Typography, Box, Container, Grid, Chip } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ProjectTemplate(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
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

  const sectionTitleSx = {
    color: 'text.main',
    pt: 10,
    pb: 1,
    fontSize: { xs: '2rem', md: '3rem' },
    textAlign: 'center',
  };

  const underline = (
    <Box
      className="centered"
      sx={{
        borderTop: 2.5,
        borderColor: 'primary.main',
        mt: 1,
        width: { xs: 220, md: 400 },
        pb: 5,
      }}
    />
  );

  const cardSx = {
    bgcolor: 'secondary.main',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 3,
    px: 3,
    py: 3.5,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  return (
    <main>
      {/* Section 1: Hero */}
      <Element name="Hero">
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: { xs: 860, md: 940 },
            mt: 10,
            overflow: 'hidden',
            bgcolor: 'background.main',
          }}
        >
          {/* Hero GIF */}
          <Box
            component="img"
            src={props.HeroGif}
            alt="Hero background"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.35,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />

          {/* Dark overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0, 0, 0, 0.2)',
              pointerEvents: 'none',
            }}
          />

          {/* Fade */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `
                radial-gradient(
                  ellipse 110% 70% at 50% 18%,
                  rgba(18, 17, 22, 0) 0%,
                  rgba(18, 17, 22, 0.08) 28%,
                  rgba(18, 17, 22, 0.18) 45%,
                  rgba(18, 17, 22, 0.42) 62%,
                  rgba(18, 17, 22, 0.80) 80%,
                  #121116 100%
                )
              `,
            }}
          />

          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              zIndex: 1,
              pt: { xs: 14, md: 20 },
              pb: { xs: 10, md: 14 },
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'text.main',
                    fontSize: { xs: '2.2rem', md: '3.5rem' },
                    pb: 2,
                  }}
                >
                  {props.ProjectTitle}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: 'text.alt',
                    fontSize: { xs: '1.05rem', md: '1.3rem' },
                    lineHeight: 1.7,
                    pb: 3,
                  }}
                >
                  {props.ProjectSummary}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.25,
                    mb: 3,
                  }}
                >
                  {props.TechStack?.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      sx={{
                        color: 'text.main',
                        bgcolor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  ))}
                </Box>

                <a
                  href={props.ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.link', // default text color
                      position: 'relative',
                      display: 'inline-block',
                      cursor: 'pointer',
                      transition: 'color 0.25s ease',

                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -4,
                        width: '0%',
                        height: '2px',
                        backgroundColor: 'text.main', // underline color
                        transition: 'width 0.3s ease',
                      },

                      '&:hover': {
                        color: 'text.main', // hover text color
                      },

                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    Play the game on Itch
                  </Typography>
                </a>
              </Grid>

              <Grid item xs={12} md={5}>
                <Box sx={cardSx}>
                  <Typography variant="h4" sx={{ color: 'text.main', pb: 2 }}>
                    Quick Facts
                  </Typography>

                  <Box sx={{ pb: 2 }}>
                    <Typography sx={{ color: 'text.main' }}>Project Type</Typography>
                    <Typography sx={{ color: 'text.alt' }}>{props.ProjectType}</Typography>
                  </Box>

                  <Box sx={{ pb: 2 }}>
                    <Typography sx={{ color: 'text.main' }}>Engine / Language</Typography>
                    <Typography sx={{ color: 'text.alt' }}>
                      {props.ProjectEngine} / {props.ProjectLanguage}
                    </Typography>
                  </Box>

                  <Box sx={{ pb: 2 }}>
                    <Typography sx={{ color: 'text.main' }}>Team Size</Typography>
                    <Typography sx={{ color: 'text.alt' }}>{props.ProjectTeamSize}</Typography>
                  </Box>

                  <Box sx={{ pb: 2 }}>
                    <Typography sx={{ color: 'text.main' }}>Role</Typography>
                    <Typography sx={{ color: 'text.alt' }}>{props.ProjectRole}</Typography>
                  </Box>

                  <Box sx={{ pb: 2 }}>
                    <Typography sx={{ color: 'text.main' }}>Duration</Typography>
                    <Typography sx={{ color: 'text.alt' }}>{props.ProjectTimeFrame}</Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ color: 'text.main' }}>Build Status</Typography>
                    <Typography sx={{ color: 'text.alt' }}>{props.BuildStatus}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>

      {/* Section 2: Technical Summary */}
      <Element name="Summary">
        <Box sx={{ width: '100%', bgcolor: 'background.alt', pb: 10 }}>
          <Typography variant="h3" sx={sectionTitleSx}>
            Technical Summary
          </Typography>
          {underline}

          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'text.alt',
                lineHeight: 1.8,
                textAlign: 'center',
                maxWidth: 900,
                mx: 'auto',
                pb: 5,
              }}
            >
              {props.Overview}
            </Typography>

            <Grid
              container
              spacing={3}
              alignItems="stretch"
              sx={{
                mb: 3,
              }}
            >
              <Grid item xs={12} md={4}>
                <Box sx={cardSx}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.main',
                      pb: 2,
                      letterSpacing: '0.5px',
                    }}
                  >
                    My Role
                  </Typography>

                  {props.Contributions?.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color: 'text.alt',
                        lineHeight: 1.9,
                        pb: 1.2,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      • {item}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={cardSx}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.main',
                      pb: 2,
                      letterSpacing: '0.5px',
                    }}
                  >
                    Technical Highlights
                  </Typography>

                  {props.ProgrammingConcepts?.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color: 'text.alt',
                        lineHeight: 1.9,
                        pb: 1.2,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      • {item.title}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={cardSx}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.main',
                      pb: 2,
                      letterSpacing: '0.5px',
                    }}
                  >
                    Build Status
                  </Typography>

                  <Typography
                    sx={{
                      color: 'text.alt',
                      lineHeight: 1.9,
                      pb: 2,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    {props.CompletionLevel}
                  </Typography>

                  {props.KnownLimitations && (
                    <>
                      <Typography
                        sx={{
                          color: 'text.main',
                          pb: 1,
                        }}
                      >
                        Known Limitation
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.alt',
                          lineHeight: 1.9,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                        }}
                      >
                        {props.KnownLimitations}
                      </Typography>
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>

            {props.CollaborationNote && (
              <Box
                sx={{
                  ...cardSx,
                  mt: 10,
                  maxWidth: 1200,
                  mx: 'auto',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'text.main',
                    pb: 1,
                    letterSpacing: '0.5px',
                  }}
                >
                  Collaboration Note
                </Typography>
                <Typography
                  sx={{
                    color: 'text.alt',
                    lineHeight: 1.9,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                  }}
                >
                  {props.CollaborationNote}
                </Typography>
              </Box>
            )}
          </Container>
        </Box>
      </Element>

      <Element name="Media">
      <Box sx={{ width: '100%', bgcolor: 'background.main', pb: 10 }}>
        <Typography variant="h3" sx={sectionTitleSx}>
          Media
        </Typography>
        {underline}

        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} lg={6}>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.main',
                  pb: 2,
                  textAlign: 'center',
                }}
              >
                Gameplay
              </Typography>

              <Box sx={cardSx}>
                <div className="embed-container">
                  <iframe
                    src={props.ProjectDemo}
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>

                {props.GameplayNote && (
                  <Typography
                    sx={{
                      color: 'text.alt',
                      lineHeight: 1.8,
                      textAlign: 'center',
                      pt: 2,
                    }}
                  >
                    {props.GameplayNote}
                  </Typography>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.main',
                  pb: 2,
                  textAlign: 'center',
                }}
              >
                Gallery
              </Typography>

              <Box sx={cardSx}>
                <Slider {...settings}>
                  {props.GalleryImages?.map((image, index) => (
                    <Box className="embed-container" sx={{ px: 1 }} key={index}>
                      <div>
                        <img src={image} alt={`gallery ${index + 1}`} />
                      </div>
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Element>

      {/* Section 4: Code Samples */}
      {props.CodeSamples?.length > 0 && (
        <Element name="CodeSamples">
          <Box sx={{ width: '100%', bgcolor: 'background.alt', pb: 10 }}>
            <Typography variant="h3" sx={sectionTitleSx}>
              Code Samples
            </Typography>
            {underline}

            <Container maxWidth="xl">
              <Grid container spacing={3}>
                {props.CodeSamples.map((sample, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box sx={cardSx}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'text.main',
                          pb: 2,
                          letterSpacing: '0.5px',
                        }}
                      >
                        {sample.title}
                      </Typography>

                      <SyntaxHighlighter
                        language="csharp"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '16px',
                          borderRadius: '12px',
                          background: '#0d0d12',
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                          border: '1px solid rgba(255,255,255,0.06)',
                          overflowX: 'auto',

                          scrollbarWidth: 'thin', // Firefox
                          scrollbarColor: '#2a2a35 transparent',
                        }}
                        codeTagProps={{
                          style: {
                            fontFamily: 'Fira Code, monospace',
                          },
                        }}
                      >
                        {sample.code}
                      </SyntaxHighlighter>

                      {sample.notes?.map((note, noteIndex) => (
                        <Typography
                          key={noteIndex}
                          sx={{
                            color: 'text.alt',
                            lineHeight: 1.9,
                            pb: 1.2,
                            fontSize: { xs: '0.95rem', md: '1rem' },
                          }}
                        >
                          • {note}
                        </Typography>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Element>
      )}

      {/* Section 6: Reflection */}
      <Element name="Reflection">
        <Box sx={{ width: '100%', bgcolor: 'background.alt', pb: 12 }}>
          <Typography variant="h3" sx={sectionTitleSx}>
            Reflection
          </Typography>
          {underline}

          <Container maxWidth="md">
            <Typography
              variant="h6"
              sx={{
                color: 'text.alt',
                lineHeight: 1.8,
                textAlign: 'center',
              }}
            >
              {props.Reflection}
            </Typography>
          </Container>
        </Box>
      </Element>
    </main>
  );
}

export default ProjectTemplate;