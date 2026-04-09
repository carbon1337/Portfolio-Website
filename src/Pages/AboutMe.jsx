import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

// Simplified About Me page
// - Removed animations
// - Removed heavy shadows
// - Cleaner, flatter look
// - Uses text.link accent subtly

const imageCards = [
  {
    src: '/images/about/climbing-1.jpg',
    alt: 'Riley climbing indoors',
    title: 'Climbing',
    description: 'Problem solving in real time, where every move is a small decision under pressure.',
    height: 420,
  },
  {
    src: '/images/about/routesetting-1.jpg',
    alt: 'Riley routesetting on the wall',
    title: 'Routesetting',
    description: 'Designing movement that feels intentional, readable, and rewarding to learn.',
    height: 280,
  },
  {
    src: '/images/about/climbing-2.jpg',
    alt: 'Riley projecting a climb',
    title: 'Iteration',
    description: 'Testing, failing, adjusting, and improving each attempt.',
    height: 320,
  },
];

function ImageCard({ src, alt, title, description, height }) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '20px',
        height: height,
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: '#18171d',
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.85)',
        }}
      />

      {/* Subtle gradient for readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(10,10,12,0.9) 0%, rgba(10,10,12,0.2) 60%, rgba(10,10,12,0) 100%)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          p: 2.5,
        }}
      >
        <Typography sx={{ color: 'text.main', fontWeight: 600, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography sx={{ color: 'text.alt', fontSize: '0.95rem' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#121116',
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: 'text.link',
                fontWeight: 600,
                mb: 2,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: 'text.main',
                fontWeight: 800,
                mb: 3,
              }}
            >
              Climber, route setter,
              <br />
              and developer.
            </Typography>

            <Typography sx={{ color: 'text.alt', lineHeight: 1.9 }}>
              My approach to development is heavily influenced by climbing. Both involve solving problems, testing ideas, and refining until something feels right. Whether I am building a mechanic or climbing a route, I am constantly thinking about flow, difficulty, and how the experience feels to move through.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <ImageCard {...imageCards[0]} />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <ImageCard {...imageCards[1]} />
                  <ImageCard {...imageCards[2]} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8, borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* Explanation Section */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: 'text.main', mb: 2 }}>
              Climbing ↔ Development
            </Typography>

            <Typography sx={{ color: 'text.alt', lineHeight: 1.9, mb: 2 }}>
              Climbing teaches you to break down complex problems into smaller, readable steps. You test different solutions, fail often, and adjust based on feedback. That exact same loop exists in development.
            </Typography>

            <Typography sx={{ color: 'text.alt', lineHeight: 1.9 }}>
              The goal in both is not just difficulty, but clarity. The best systems and the best climbs feel challenging while still being understandable.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Typography sx={{ color: 'text.link', fontWeight: 600, mb: 2 }}>
                Routesetting Principles
              </Typography>

              <Box sx={{ display: 'grid', gap: 2 }}>
                {[
                  'Designing intentional movement',
                  'Balancing challenge and readability',
                  'Testing and iterating constantly',
                  'Creating memorable experiences',
                ].map((text) => (
                  <Typography key={text} sx={{ color: 'text.alt' }}>
                    • {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, maxWidth: 800 }}>
          <Typography variant="h4" sx={{ color: 'text.main', mb: 2 }}>
            What I bring
          </Typography>

          <Typography sx={{ color: 'text.alt', lineHeight: 1.9 }}>
            Climbing has shaped how I approach creative work. It has taught me patience, attention to detail, and the importance of iteration. Routesetting pushed that further by making me design experiences for others, not just solve problems myself. That mindset carries directly into the games I build.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMe;