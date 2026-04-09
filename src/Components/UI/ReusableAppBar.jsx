import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
    Toolbar,
    AppBar,
    Container,
    useScrollTrigger,
    Typography,
    Box,
    Button,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    IconButton,
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 6 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

function ReusableAppBar(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        { label: 'Quick Facts', to: 'Hero' },
        { label: 'Summary', to: 'Summary' },
        { label: 'Media', to: 'Media' },
        { label: 'Code Samples', to: 'CodeSamples' },
        { label: 'Reflection', to: 'Reflection' },
    ];

    const navButtonSx = {
  typography: 'h6',
  color: 'text.link',
  textTransform: 'none',
  fontWeight: 500,
  letterSpacing: '0.4px',
  minWidth: 'auto',
  px: 1.5,
  position: 'relative',
  borderRadius: '8px',

  transition: 'all 0.2s ease',

  // ✅ background hover (clean, subtle)
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.06)',
    color: 'text.main',
  },

  // underline animation
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 6,
    height: '2px',
    backgroundColor: 'currentColor',
    transform: 'scaleX(0)',
    transformOrigin: 'center',
    transition: 'transform 0.28s ease',
  },

  '&:hover::after': {
    transform: 'scaleX(1)',
  },
};

    return (
        <main>
            <Container maxWidth="xl">
                <ElevationScroll {...props}>
                    <AppBar
                        elevation={0}
                        sx={{
                            bgcolor: 'rgba(18, 17, 22, 0.78)',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            backdropFilter: 'blur(14px)',
                        }}
                    >
                        <Toolbar
                            sx={{
                                justifyContent: 'space-between',
                                minHeight: '84px',
                                px: { xs: 2, sm: 4, lg: 6 },
                            }}
                        >
                            {/* Home */}
                            <Button
                                component={RouterLink}
                                to="/"
                                state={{ scrollToTop: true }}
                                onClick={closeMobileMenu, () => window.scrollTo({ top: 0, behavior: 'instant' })}
                                sx={{
                                    p: 0,
                                    minWidth: 'auto',
                                    textTransform: 'none',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.main',
                                        fontWeight: 700,
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    Home
                                </Typography>
                            </Button>

                            {/* Desktop Menu */}
                            <Box
                                sx={{
                                    display: { xs: 'none', lg: 'flex' },
                                    alignItems: 'center',
                                    gap: 0.5,
                                }}
                            >
                                {menuItems.map((item, index) => (
                                    <ScrollLink
  key={index}
  activeClass="active"
  to={item.to}
  spy={true}
  smooth={true}
  offset={-50}
  duration={1000}
  style={{ textDecoration: 'none' }}
>
  <Box
    sx={{
      display: 'inline-block',

      '&.active button': {
        backgroundColor: 'rgba(255,255,255,0.08)',
        color: 'text.main',
      },
    }}
  >
    <Button sx={navButtonSx}>
      {item.label}
    </Button>
  </Box>
</ScrollLink>
                                ))}
                            </Box>

                            {/* Mobile Menu Button */}
                            <IconButton
                                aria-label="open mobile menu"
                                onClick={toggleMobileMenu}
                                sx={{
                                    display: { xs: 'flex', lg: 'none' },
                                    color: 'text.main',
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                anchor="top"
                open={isMobileMenuOpen}
                onClose={closeMobileMenu}
                PaperProps={{
                    sx: {
                        bgcolor: 'background.main',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                    },
                }}
            >
                <List sx={{ pt: 2, pb: 2 }}>
                    <ListItemButton
                        component={RouterLink}
                        to="/"
                        state={{ scrollToTop: true }}
                        onClick={closeMobileMenu}
                        sx={{
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        <ListItemText
                            primary="Home"
                            primaryTypographyProps={{
                                sx: {
                                    color: 'text.main',
                                    fontWeight: 600,
                                },
                            }}
                        />
                    </ListItemButton>

                    {menuItems.map((item, index) => (
                        <ScrollLink
                            key={index}
                            activeClass="active"
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-85}
                            duration={800}
                            onClick={closeMobileMenu}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        >
                            <ListItemButton
                                sx={{
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        sx: {
                                            color: 'text.main',
                                            fontWeight: 500,
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </ScrollLink>
                    ))}
                </List>
            </Drawer>
        </main>
    );
}

export default ReusableAppBar;